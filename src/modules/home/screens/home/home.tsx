import React, {useEffect} from 'react';

import {Container, Row, Text} from './styles';

import Logo from '../../../../assets/icons/logo.svg';
import House from '../../../../assets/icons/House.svg';

import {Informations} from '../../components/Informations/Informations';
import {useLocation} from '../../hooks/useLocation';

import {CurrentWeather} from '../../interfaces/informations';
import {Loading} from '../../../../components/Loading';
import {useQuery} from 'react-query';
import {ApiWeather} from '../../services/weatherApi';

export const Home: React.FC = () => {
  const {requestLocationPermission, permitions, location} = useLocation();
  const handleData = async () => {
    const data = await ApiWeather.getWeather({
      lat: location.lat,
      lon: location.lon,
    });
    return data;
  };

  const {data, isLoading} = useQuery<CurrentWeather>(['weather-info'], () =>
    handleData(),
  );

  useEffect(() => {
    if (permitions !== 'granted') {
      requestLocationPermission();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Logo height={260} />
      {isLoading && <Loading />}
      {data && (
        <>
          <Text bold>{data.current?.temp}°C</Text>
          <Text size={24}>{data.current?.weather[0].description}</Text>
          <Text size={16}>Sensação: {data.current?.feels_like}°C</Text>
          <Row>
            <Text size={16}>Visibilidade: {data.current?.visibility}</Text>
            <Text size={16}>Humidade: {data.current?.humidity}</Text>
          </Row>
          <House height={180} />

          <Informations />
        </>
      )}
    </Container>
  );
};
