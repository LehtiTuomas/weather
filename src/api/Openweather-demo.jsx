import axios from 'axios';

// This is demo whitout real api-key

const KEY = 'secred API key'

export default axios.create({
    baseURL: 'https://api.openweathermap.org',
    params: { appid: KEY }
});