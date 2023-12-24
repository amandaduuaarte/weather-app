import React from 'react';
import {Routes} from '../routes/app.routes';
import {LocationProvider} from '../modules/home/hooks/useLocation';
import {QueryClientProvider} from 'react-query';
import {queryClient} from '../services/queryClient';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <Routes />
      </LocationProvider>
    </QueryClientProvider>
  );
}

export default App;
