// axios is a library you can call APi with the help of it

import axios from 'axios';
const API_KEY = '48fa9838598b24c40946dc33d60f44c6';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';




const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.responsive;
    }
}

export default getWeather;
