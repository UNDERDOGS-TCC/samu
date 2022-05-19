import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {LocationGeocodedAddress, reverseGeocodeAsync} from 'expo-location';
import React, {useEffect, useState} from 'react';
import {MapEvent, Marker} from 'react-native-maps';
import MapInfos from '../../components/MapInfos/MapInfos';
import {Container, Map} from './styles';

interface UserLocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

type RouteParams = RouteProp<{
  params: {
    userLocation: UserLocation;
    currentAddress: LocationGeocodedAddress[];
  };
}>;

const Mapa: React.FC = () => {
  const navigation = useNavigation();
  const {userLocation, currentAddress} = useRoute<RouteParams>().params;
  const [region, setRegion] = useState(userLocation);
  const [address, setAddress] = useState(currentAddress);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleDragMarker = async (e: MapEvent) => {
    console.log(e.nativeEvent.coordinate);
    const latlng = e.nativeEvent.coordinate;
    setRegion((oldRegion) => ({
      ...oldRegion,
      latitude: latlng.latitude,
      longitude: latlng.longitude,
    }));
    setAddress(await reverseGeocodeAsync(latlng));
  };

  return (
    <Container>
      <Map region={region}>
        <Marker
          draggable
          onDragEnd={handleDragMarker}
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
        />
      </Map>
      <MapInfos
        samuLocation={{kmsToYou: 12, minutesToYou: 13}}
        userAddress={address}
      />
    </Container>
  );
};

export default Mapa;
