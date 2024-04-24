export interface InformationProps {
  temp: string;
  hour: number;
}

export interface CurrentWeather {
  current: {
    clouds: number;
    temp: number;
    feels_like: number;
    visibility: number;
    humidity: number;
    weather: {
      description: string;
      main: string;
    }[];
  };
  daily: {
    clouds: number;
    temp: {
      morn: number;
      night: number;
    };
  }[];
}
