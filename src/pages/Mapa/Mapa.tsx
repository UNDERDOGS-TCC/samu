import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {LocationGeocodedAddress, reverseGeocodeAsync} from 'expo-location';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import MapView, {LatLng, MapEvent, Marker} from 'react-native-maps';
import {Alert, Image, ImageSourcePropType} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import MapInfos from '../../components/MapInfos/MapInfos';
import {Container, Map} from './styles';

import samuImage from '../../../assets/carro-ambulancia.png';
import {closestSamuBaseApi} from '../../api/map';

import samu_base from '../../../assets/GPS_blue.png';
import dark_map from '../../../assets/maps_darkmode';
import light_map from '../../../assets/maps_lightmode';
import {useTheme} from '../../contexts/ThemeManagerProvider';

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
  const [samuBaseLocation, setSamuBaseLocation] = useState<LatLng>();
  const {isDarkMode, lightMode, darkMode} = useTheme();
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const getSamuLocation = useCallback(async () => {
    try {
      const res = await closestSamuBaseApi(region.latitude, region.longitude);
      setSamuLocation({
        latitude: res.data.lat,
        longitude: res.data.lng,
      });
      setSamuBaseLocation({
        latitude: res.data.lat,
        longitude: res.data.lng,
      });
    } catch (error) {
      Alert.alert('Ocorreu um erro', 'Erro ao buscar localização do SAMU', [
        {text: 'OK'},
      ]);
    }
  }, [region]);

  const centerMap = () => {
    mapRef.current?.fitToSuppliedMarkers(['user', 'samu'], {
      animated: true,
      edgePadding: {
        top: 100,
        right: 50,
        bottom: 50,
        left: 50,
      },
    });
  };

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
      <Map
        mapPadding={{top: 0, right: 0, bottom: 200, left: 0}}
        customMapStyle={isDarkMode ? dark_map : light_map}
        userInterfaceStyle={isDarkMode ? 'dark' : 'light'}
        ref={mapRef}
        region={region}
      >
        <Marker
          identifier="user"
          draggable
          onDragEnd={handleDragMarker}
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
        />
        {samuBaseLocation && (
          <Marker identifier="samuBase" coordinate={samuBaseLocation}>
            <Image
              style={{width: 60, height: 60}}
              resizeMode="contain"
              source={samu_base as ImageSourcePropType}
            />
          </Marker>
        )}
        {samuLocation && (
          <Marker
            onLayout={centerMap}
            identifier="samu"
            coordinate={samuLocation}
          >
            <Image
              style={{width: 60, height: 60}}
              resizeMode="contain"
              source={samuImage as ImageSourcePropType}
            />
          </Marker>
        )}
      </Map>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: isDarkMode
            ? darkMode.main.colors.placeholder
            : lightMode.main.colors.placeholder,
        }}
        backgroundStyle={{
          backgroundColor: isDarkMode
            ? darkMode.main.colors.background
            : lightMode.main.colors.background,
        }}
        snapPoints={['25%', '50%']}
      >
        <BottomSheetView style={{flex: 1}}>
          <MapInfos samuLocation={{km: 12, min: 12}} userAddress={address} />
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
};

export default Mapa;
