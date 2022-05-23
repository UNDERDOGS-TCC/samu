import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {LocationGeocodedAddress, reverseGeocodeAsync} from 'expo-location';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import MapView, {LatLng, MapEvent, Marker} from 'react-native-maps';
import {Image, ImageSourcePropType} from 'react-native';
import MapInfos from '../../components/MapInfos/MapInfos';
import {Container, Map} from './styles';

import samuImage from '../../../assets/carro-ambulancia.png';
import {randomLocationApi} from '../../api/map';

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
  const [samuLocation, setSamuLocation] = useState<LatLng>();
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const getSamuLocation = useCallback(async () => {
    const res = await randomLocationApi(region.latitude, region.longitude);
    console.log(res);
    setSamuLocation({
      latitude: res.data.lat,
      longitude: res.data.lng,
    });
    mapRef.current?.fitToSuppliedMarkers(['user', 'samu'], {
      animated: true,
      edgePadding: {
        top: 0,
        right: 20,
        bottom: 0,
        left: 20,
      },
    });
  }, [region]);

  useEffect(() => {
    getSamuLocation();
  }, [getSamuLocation]);

  const handleDragMarker = async (e: MapEvent) => {
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
      <Map ref={mapRef} region={region}>
        <Marker
          identifier="user"
          draggable
          onDragEnd={handleDragMarker}
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
        />
        {samuLocation && (
          <Marker identifier="samu" coordinate={samuLocation}>
            <Image
              style={{width: 60, height: 60}}
              resizeMode="contain"
              source={samuImage as ImageSourcePropType}
            />
          </Marker>
        )}
      </Map>
      <MapInfos
        samuLocation={{kmsToYou: 12, minutesToYou: 13}}
        userAddress={address}
      />
    </Container>
  );
};

export default Mapa;
