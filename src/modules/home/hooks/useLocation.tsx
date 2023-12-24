import React, {createContext, useCallback, useContext, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {LocationData} from '../interfaces/location';
import {ChildrenDefaultProps} from '../../../models/children';
import {request, PERMISSIONS} from 'react-native-permissions';
import {Platform} from 'react-native';

const LocationContext = createContext<LocationData>({} as LocationData);
const LocationProvider: React.FC<ChildrenDefaultProps> = ({children}) => {
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });

  const getLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {coords} = position;
        setLocation({
          lat: coords?.latitude,
          lon: coords?.longitude,
        });
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const requestLocationPermission = useCallback(async () => {
    try {
      await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ).then(result => {
        if (result === 'granted') {
          getLocation();
          console.log('You can use Geolocation');
          return true;
        }
      });
    } catch (err) {
      return false;
    }
  }, [getLocation]);

  return (
    <LocationContext.Provider
      value={{location, setLocation, getLocation, requestLocationPermission}}>
      {children}
    </LocationContext.Provider>
  );
};

function useLocation(): LocationData {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error('useLocation must be used within an CharacterProvider');
  }
  return context;
}

export {LocationProvider, useLocation};
