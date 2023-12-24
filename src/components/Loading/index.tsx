import React from 'react';
import {Container} from './styles';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../constants/colors';

export const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color={colors.backgrounds.white} size="large" />
    </Container>
  );
};
