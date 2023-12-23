import {API_KEY} from '../../../constants/apiKey';
import axios from 'axios';

class HomeService {
  lat = 25;
  lon = 25;
  lang = 'pt_br';
  baseUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&lang={lang}&appid=${API_KEY}&units=metric`;
  public async get() {
    try {
      const response = await axios.get(this.baseUrl);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public post(data: any) {
    axios.post(this.baseUrl, data);
  }
}

export default new HomeService();
