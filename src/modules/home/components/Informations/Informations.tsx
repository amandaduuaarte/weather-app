import React from 'react';
import {Container, Header, Row, TempCard, Text} from './styles';
import Logo from '../../../../assets/icons/logo.svg';

export const Informations: React.FC = () => {
  const tempsMock = [
    {
      temp: 19,
      hour: 15,
    },
    {
      temp: 18,
      hour: 16,
    },
    {
      temp: 18,
      hour: 17,
    },
    {
      temp: 18,
      hour: 18,
    },
  ];
  return (
    <Container>
      <Row>
        <Text>Today</Text>
        <Text>July, 21</Text>
      </Row>
      <Header />
      <Row>
        {tempsMock.map((item, index) => {
          return (
            <TempCard key={index}>
              <Text size={12}>{item.temp}°C</Text>
              <Logo height={64} width={64} />
              <Text size={12}>{item.hour}.00</Text>
            </TempCard>
          );
        })}
      </Row>
    </Container>
  );
};
