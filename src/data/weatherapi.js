import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '67498a6135c6d17ad0e7b863ea3f9d49';

export const getWeatherData = async (cityname) => {
    try {
        const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}