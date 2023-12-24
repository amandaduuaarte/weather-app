import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});
