import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const Routes: React.FC = () => {
  const AppRoutes = createNativeStackNavigator();
  return (
    <AppRoutes.Navigator>
      <></>
    </AppRoutes.Navigator>
  );
};
