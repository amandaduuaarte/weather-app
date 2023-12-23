import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingRoutes} from '../modules/onboarding/routes/onboarding.routes';
import {NavigationContainer} from '@react-navigation/native';

export const Routes: React.FC = () => {
  const AppRoutes = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AppRoutes.Navigator
        initialRouteName="OnboardingModule"
        screenOptions={{
          headerShown: false,
        }}>
        <AppRoutes.Screen
          name="OnboardingModule"
          component={OnboardingRoutes}
        />
      </AppRoutes.Navigator>
    </NavigationContainer>
  );
};
