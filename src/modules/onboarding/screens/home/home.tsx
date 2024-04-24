import React from 'react';
import {Container, Text} from './styles';
import Logo from '../../../../assets/icons/logo.svg';
import {colors} from '../../../../constants/colors';
import {Button} from '../../components/Button/Button';
import {useNavigation} from '../../../../hooks/useNavigation';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo />
      <Text bold>Weather</Text>
      <Text color={colors.texts.primary}>ForeCasts</Text>
      <Button
        title="Get Start"
        action={() => navigation.navigate('HomeModule')}
      />
    </Container>
  );
};
