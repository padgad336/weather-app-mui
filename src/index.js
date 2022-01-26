import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from '@mui/material'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { deepOrange, teal } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: teal,
    secondary: deepOrange
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();