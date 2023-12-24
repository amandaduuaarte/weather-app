import {API_KEY} from '../../../constants/apiKey';
import {Api} from '../../../services/api';

interface GetProps {
  lat: number;
  lon: number;
}
class WeatherService {
  lang = 'pt_br';

  public async get({lat, lon}: GetProps) {
    try {
      const response = await Api.get(
        `/onecall?lat=${lat}&lon=${lon}&lang=${this.lang}&appid=${API_KEY}&units=metric`,
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new WeatherService();
