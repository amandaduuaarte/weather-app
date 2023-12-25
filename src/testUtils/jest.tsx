import {render, RenderOptions} from '@testing-library/react-native';
import React, {ReactElement} from 'react';
import {ChildrenDefaultProps} from '../models/children';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {LocationProvider} from '../modules/home/hooks/useLocation';

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, {wrapper: Allproviders, ...options});

const queryClient = new QueryClient({
  defaultOptions: {queries: {cacheTime: 0, retry: false}},
});

const Allproviders: React.FC<ChildrenDefaultProps> = ({children}) => (
  <QueryClientProvider client={queryClient}>
    <LocationProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </LocationProvider>
  </QueryClientProvider>
);

export * from '@testing-library/react-native';
export {customRender as render};
