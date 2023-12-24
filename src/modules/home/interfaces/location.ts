import {Dispatch, SetStateAction} from 'react';

export interface LocationData {
  location: {
    lat: number;
    lon: number;
  };
  setLocation: Dispatch<SetStateAction<{lat: number; lon: number}>>;
  getLocation: () => void;
  requestLocationPermission: () => void;
}
