import styled from 'styled-components/native';
import {colors} from '../../../../constants/colors';

interface TextProps {
  size?: number;
}

export const Container = styled.View`
  height: 24%;
  width: 100%;
  background: ${colors.backgrounds.primary};
  border-radius: 24px;
  padding: 24px;
`;

export const Header = styled.View`
  height: 1px;
  width: 100%;
  background: ${colors.backgrounds.white};
  margin-top: 2px;
`;

export const Text = styled.Text<TextProps>`
  font-family: 'FiraCode-Regular';
  font-size: ${({size}) => size || 16}px;
  color: ${colors.texts.white};
`;

export const Scrollbar = styled.ScrollView``;

export const Row = styled.View`
  flex-flow: row;
  justify-content: space-between;
`;

export const TempCard = styled.View`
  margin-top: 12px;
  width: 10%;
  justify-content: center;
  align-items: center;
`;
