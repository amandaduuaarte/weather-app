import React from 'react';
import {Routes} from '../routes/app.routes';
import {LocationProvider} from '../modules/home/hooks/useLocation';

function App(): React.JSX.Element {
  return (
    <LocationProvider>
      <Routes />
    </LocationProvider>
  );
}

export default App;
