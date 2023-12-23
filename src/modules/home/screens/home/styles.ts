import styled from 'styled-components/native';
import {colors} from '../../../../constants/colors';

interface TextProps {
  bold?: boolean;
  size?: number;
}

export const Container = styled.View`
  flex: 1;
  background: ${colors.backgrounds.primaryDark};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  font-family: ${({bold}) => (bold ? 'FiraCode-Medium' : 'FiraCode-Regular')};
  font-size: ${({size}) => size || 32}px;
  color: ${colors.texts.white};
`;

export const Row = styled.View`
  flex-flow: row;
  gap: 24px;
  margin-bottom: 24px;
`;
