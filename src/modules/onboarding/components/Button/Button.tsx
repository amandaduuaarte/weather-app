import React from 'react';
import {Container, Text} from './styles';
import {ButtonProps} from '../../interfaces/button';

export const Button: React.FC<ButtonProps> = ({title, action}) => {
  return (
    <Container onPress={action}>
      <Text>{title}</Text>
    </Container>
  );
};
