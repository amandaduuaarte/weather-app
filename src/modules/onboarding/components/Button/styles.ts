import styled from 'styled-components/native';
import {colors} from '../../../../constants/colors';

export const Container = styled.TouchableOpacity`
  height: 60px;
  width: 300px;
  border-radius: 24px;
  background: ${colors.backgrounds.yellow};
  margin-top: 32px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'FiraCode-Semibold';
  font-size: 24px;
  color: ${colors.texts.primaryDark};
`;
