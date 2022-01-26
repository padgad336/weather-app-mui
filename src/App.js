import React, { useState, useEffect, Fragment } from 'react';

import { getWeatherData } from './data/weatherapi';
import { AppBar, Box, Button, Card, CardContent, Container, Stack, TextField, Toolbar, Typography } from '@mui/material';

function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('bangkok');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getWeatherData(city);
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather App
            </Typography>

          </Toolbar>
        </AppBar>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px', width: '100%' }}>

          <Card sx={{ width: 680 }}>
            <CardContent>
              <Typography align='center' variant='h4' gutterBottom>
                <i className="fa fa-cloud"></i>Weather App
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px', width: '100%' }}>
                <TextField size='small' variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name" />
                <Button size='small' variant='contained' onClick={() => getData()}>Search</Button>
              </Box>
              {loading ? (
                <div className="loader-container">
                  <Typography variant='h4'>
                    กำลังโหลด
                  </Typography>
                </div>
              ) : (
                <>
                  {weatherdata !== null ? (
                    <Stack justifyContent={'center'} sx={{ width: '100%' }}>
                      <Typography variant='h5' color="text.secondary">Live Weather Condition</Typography >
                      <Box className="weather-icon">
                        <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} style={{ width: '100px', height: '100px' }} alt="imgicon" />
                      </Box>
                      <Typography>{weatherdata.weather[0].main}</Typography>
                      <Typography>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</Typography>
                      <div className="location">
                        <Typography><i className="fa fa-street-view"></i>{weatherdata.name} | {weatherdata.sys.country}</Typography>
                      </div>
                      <div className="temprature-range">
                        <Typography>Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C
                          || Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C
                          || Humidity: {weatherdata.main.humidity}%</Typography>
                      </div>
                    </Stack>
                  ) : null}
                </>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm">
          <Typography align='center' variant="body1">
            Weather App powered by psu
          </Typography>
        </Container>
      </Box>
    </Fragment>
  );
}

export default App;
