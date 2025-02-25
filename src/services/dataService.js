// src/services/dataService.js
const axios = require('axios');
const moment = require('moment');
const API_URL = process.env.API_WEATHER_URL;

const fetchExternalData = async (longitude, latitude) => {
    const dailyQuery = "&daily=temperature_2m_max&daily=temperature_2m_min&daily=weather_code&daily=precipitation_probability_mean";
    const hourlyQuery = "&hourly=temperature_2m&hourly=weather_code&hourly=precipitation_probability";
    const { data } = await axios.get(`${API_URL}?latitude=${latitude}&longitude=${longitude}${dailyQuery}${hourlyQuery}`);
    return data;


    // // Current time
    // const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
    // return `This is external data at ${currentTime}`;
};

module.exports = { fetchExternalData };
