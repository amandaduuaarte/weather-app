import axios from 'axios';
import {API_KEY} from '../constants/apiKey';

const url = `http://api.weatherapi.com/v1key=${API_KEY}`;

export const api = axios.create({
  baseURL: url,
});
