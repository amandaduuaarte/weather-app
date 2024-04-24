import React from 'react';
import {Container, Divider, Row, TempCard, Text} from './styles';
import Logo from '../../../../assets/icons/logo.svg';
import {CurrentWeather} from '../../interfaces/information';
import {Loading} from '../../../../components/Loading';
import {useQuery} from 'react-query';
import {FlatList, View} from 'react-native';

type TDailyWeather = {
  clouds: number;
  temp: {
    morn: number;
    night: number;
  };
};
export const Information: React.FC = () => {
  const {data, isLoading} = useQuery<CurrentWeather>('weather-info');

  const CurrentDate = new Date();
  const CurrentDay = CurrentDate.getDate();
  const CurrentMonth = CurrentDate.getMonth() + 1;

  const renderItem = ({index, item}: {index: number; item: TDailyWeather}) => {
    return (
      <TempCard key={index}>
        <Text size={12}>Manhã:</Text>
        <Text size={12}>{item.temp.morn}°C</Text>
        <Logo height={64} width={64} />
        <Text size={12}>Noite:</Text>
        <Text size={12}>{item.temp.night}°C</Text>
      </TempCard>
    );
  };

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          <Row>
            <Text>Hoje</Text>
            <Text>
              {CurrentDay}/{CurrentMonth}
            </Text>
          </Row>

          <Divider />
          <Row>
            <FlatList
              contentContainerStyle={{gap: 12}}
              data={data?.daily}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Row>
        </View>
      )}
    </Container>
  );
};
