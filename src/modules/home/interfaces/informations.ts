export interface InformationsProps {
  temp: string;
  hour: number;
}

export interface CurrentWeather {
  clouds: number;
  temp: number;
  feels_like: number;
  visibility: number;
  humidity: number;
  weather: {
    description: string;
    main: string;
  }[];
}
