import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home/home';

export const OnboardingRoutes: React.FC = () => {
  const Routes = createNativeStackNavigator();
  return (
    <Routes.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Routes.Screen name="Onboarding" component={Home} />
    </Routes.Navigator>
  );
};
