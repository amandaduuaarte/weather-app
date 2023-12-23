import styled from 'styled-components/native';
import {colors} from '../../../../constants/colors';

interface TextProps {
  color?: string;
  bold?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${colors.backgrounds.primary};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  font-family: ${({bold}) => (bold ? 'FiraCode-Medium' : 'FiraCode-Regular')};
  font-size: 32px;
  color: ${({color}) => color || colors.texts.white};
`;
