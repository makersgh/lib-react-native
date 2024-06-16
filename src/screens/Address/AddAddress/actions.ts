import { useState } from 'react';
import { Alert, Linking } from 'react-native';
import { Address } from 'lib_cloud';
import Geolocation, { PositionError } from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import { displayMsg, logError } from 'lib_helpers';
import { isEmpty } from 'lodash';

export const useAction = (onAddressAdded: (address: Address) => void) => {
  const [input, setInput] = useState('');
  const [currentAddress, setCurrentAddress] = useState<Address>();

  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(false);

  const getAddressFromLocation = async (location: Parse.GeoPoint) => {
    setLoading(true);
    const res = await Geocoder.geocodePosition({ lat: location.latitude, lng: location.longitude });
    if (res.length > 0) {
      const address: Address = new Address({
        fullName: res[0].formattedAddress,
        coordinates: {
          ...location,
        },
        ...res[0],
      });
      setCurrentAddress(address);
      setAddresses([address]);
    }
    setLoading(false);
  };

  const onUseCurrentLocationPressed = () => {
    console.log('we doing it');
    Geolocation.requestAuthorization('whenInUse').then((result) => {
      console.log(result);
      Geolocation.getCurrentPosition(
        (position) => {
          getAddressFromLocation({ ...(position.coords as any) });
        },
        (error) => {
          logError(error);
          if (error.code === PositionError.PERMISSION_DENIED) {
            Alert.alert('Location permission was denied. Please enable it in Settings.');
            Linking.openURL('app-settings:');
          }
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
  };

  const searchAddress = async () => {
    try {
      if (isEmpty(input)) {
        displayMsg('Address field is empty');
        return;
      }
      setLoading(true);
      const results = await Geocoder.geocodeAddress(input);
      if (results.length > 0) {
        setAddresses(
          results.map(
            (item) =>
              new Address({
                fullName: item.formattedAddress,
                coordinates: {
                  latitude: item.position.lat,
                  longitude: item.position.lng,
                },
                ...item,
              })
          )
        );
      }
    } catch (error) {
      logError(`Error during geocoding: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const onAddressPressed = (address: Address) => () => {
    onAddressAdded?.(address);
  };
  return {
    onUseCurrentLocationPressed,
    currentAddress,
    onAddressPressed,
    searchAddress,
    addresses,
    loading,
    input,
    setInput,
  };
};
