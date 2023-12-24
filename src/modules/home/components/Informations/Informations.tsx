import React from 'react';
import {Container, Header, Row, Scrollbar, TempCard, Text} from './styles';
import Logo from '../../../../assets/icons/logo.svg';
import {CurrentWeatherDay} from '../../interfaces/informations';

export const Informations: React.FC<CurrentWeatherDay> = ({
  data,
}: CurrentWeatherDay) => {
  const CurrentDate = new Date();
  const CurrentDay = CurrentDate.getDate();
  const CurrentMonth = CurrentDate.getMonth() + 1;

  return (
    <Container>
      <Row>
        <Text>Today</Text>
        <Text>
          {CurrentDay}/{CurrentMonth}
        </Text>
      </Row>

      <Header />
      <Row>
        <Scrollbar horizontal>
          {data.map((item, index) => {
            return (
              <TempCard key={index}>
                <Text size={12}>Morn: {item.temp.morn}°C</Text>
                <Logo height={64} width={64} />
                <Text size={12}>Night: {item.temp.night}°C</Text>
              </TempCard>
            );
          })}
        </Scrollbar>
      </Row>
    </Container>
  );
};
