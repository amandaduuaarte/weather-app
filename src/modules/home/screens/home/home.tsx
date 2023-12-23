import React from 'react';
import {Container, Row, Text} from './styles';
import Logo from '../../../../assets/icons/logo.svg';
import House from '../../../../assets/icons/House.svg';
import {Informations} from '../../components/Informations/Informations';

export const Home: React.FC = () => {
  return (
    <Container>
      <Logo height={260} />
      <Text bold>19</Text>
      <Text size={24}>Precipitations</Text>
      <Row>
        <Text size={16}>Max: 24</Text>
        <Text size={16}>Min: 18</Text>
      </Row>
      <House height={180} />
      <Informations />
    </Container>
  );
};
