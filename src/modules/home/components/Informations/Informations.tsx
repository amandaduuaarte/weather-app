import React from 'react';
import {Container, Header, Row, Scrollbar, TempCard, Text} from './styles';
import Logo from '../../../../assets/icons/logo.svg';
import {CurrentWeather} from '../../interfaces/informations';
import {Loading} from '../../../../components/Loading';
import {useQuery} from 'react-query';

export const Informations: React.FC = () => {
  const {data, isLoading} = useQuery<CurrentWeather>('weather-info');

  const CurrentDate = new Date();
  const CurrentDay = CurrentDate.getDate();
  const CurrentMonth = CurrentDate.getMonth() + 1;

  return (
    <Container>
      <Row>
        <Text>Hoje</Text>
        <Text>
          {CurrentDay}/{CurrentMonth}
        </Text>
      </Row>

      <Header />
      <Row>
        <Row>
          <Text>Semana</Text>
        </Row>
        {isLoading && <Loading />}

        <Scrollbar horizontal>
          {data?.daily.map((item, index) => {
            return (
              <TempCard key={index}>
                <Text size={12}>Manhã: {item.temp.morn}°C</Text>
                <Logo height={64} width={64} />
                <Text size={12}>Noite: {item.temp.night}°C</Text>
              </TempCard>
            );
          })}
        </Scrollbar>
      </Row>
    </Container>
  );
};
