import React, {useCallback, useEffect, useState} from 'react';

import {Container, Row, Text} from './styles';

import Logo from '../../../../assets/icons/logo.svg';
import House from '../../../../assets/icons/House.svg';

import {Informations} from '../../components/Informations/Informations';
import {useLocation} from '../../hooks/useLocation';

import WeatherService from '../../services/weatherApi';
import {CurrentWeather, CurrentWeatherDay} from '../../interfaces/informations';
import {Loading} from '../../../../components/Loading';

export const Home: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
  const {requestLocationPermission, location} = useLocation();
  const [weatherInfoWeekDay, setWeatherInfoWeekDay] = useState<
    CurrentWeatherDay | any
  >([]);

  const handleWeatherData = useCallback(async () => {
    const content = await WeatherService.get({
      lat: location.lat,
      lon: location.lon,
    });

    if (content.current) {
      setCurrentWeather(content.current);
    }

    if (content.daily) {
      setWeatherInfoWeekDay(content.daily);
    }
  }, [location]);

  useEffect(() => {
    requestLocationPermission();
    handleWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Logo height={260} />
      {!currentWeather ? (
        <Loading />
      ) : (
        <>
          <Text bold>{currentWeather?.temp}°C</Text>
          <Text size={24}>{currentWeather?.weather[0].description}</Text>
          <Text size={16}>Sensação: {currentWeather?.feels_like}°C</Text>
          <Row>
            <Text size={16}>Visibilidade: {currentWeather?.visibility}</Text>
            <Text size={16}>Humidade: {currentWeather?.humidity}</Text>
          </Row>
          <House height={180} />

          <Informations data={weatherInfoWeekDay} />
        </>
      )}
    </Container>
  );
};
