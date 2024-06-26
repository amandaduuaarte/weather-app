import styled from 'styled-components/native';
import {colors} from '../../../../constants/colors';

interface TextProps {
  bold?: boolean;
  size?: number;
}

export const Container = styled.ScrollView`
  flex: 1;
  background: ${colors.backgrounds.primaryDark};
`;

export const Content = styled.View`
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
  margin: 10px 0 24px 0;
`;
