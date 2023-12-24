import {API_KEY} from '../../../constants/apiKey';
import axios from 'axios';

interface GetProps {
  lat: number;
  lon: number;
}
class HomeService {
  lang = 'pt_br';

  public async get({lat, lon}: GetProps) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang={lang}&appid=${API_KEY}&units=metric`,
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public getIconURL(iconName: string) {
    return `https://openweathermap.org/img/wn/${iconName}@4x.png`;
  }
}

export default new HomeService();
