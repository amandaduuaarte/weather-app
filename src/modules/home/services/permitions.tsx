import {request, PERMISSIONS} from 'react-native-permissions';
import {Platform} from 'react-native';
import {getLocation} from './getLocations';

export const requestLocationPermission = async () => {
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
};
