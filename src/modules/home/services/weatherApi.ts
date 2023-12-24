import {API_KEY} from '../../../constants/apiKey';
import {Api} from '../../../services/api';

interface GetProps {
  lat: number;
  lon: number;
}

export async function getWeather({lat, lon}: GetProps) {
  try {
    const response = await Api.get(
      `/onecall?lat=${lat}&lon=${lon}&lang=pt_br&appid=${API_KEY}&units=metric`,
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const ApiWeather = {
  getWeather,
};
