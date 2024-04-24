import React, {useEffect} from 'react';

import {Container, Content, Row, Text} from './styles';

import Logo from '../../../../assets/icons/logo.svg';
import House from '../../../../assets/icons/House.svg';

import {Information} from '../../components/Information/Information';
import {useLocation} from '../../hooks/useLocation';

import {CurrentWeather} from '../../interfaces/information';
import {Loading} from '../../../../components/Loading';
import {useQuery} from 'react-query';
import {ApiWeather} from '../../services/weatherApi';

import {handleVisibility} from '../../utils/weatherValues';

export const Home: React.FC = () => {
  const {requestLocationPermission, permissions, location} = useLocation();

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
    if (permissions !== 'granted') {
      requestLocationPermission();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Content>
        <Logo height={260} />
        {isLoading && <Loading />}

        {data && (
          <>
            <Text bold>{data.current?.temp}°C</Text>
            <Text size={24}>{data.current?.weather[0].description}</Text>
            <Text size={16}>Sensação: {data.current?.feels_like}°C</Text>

            <Row>
              <Text size={16}>
                Visibilidade: {handleVisibility(data.current?.visibility)}
              </Text>

              <Text size={16}>Humidade: {data.current?.humidity}%</Text>
            </Row>

            <House height={180} />
            <Information />
          </>
        )}
      </Content>
    </Container>
  );
};
