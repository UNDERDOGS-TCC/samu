/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import {ImageSourcePropType, Animated, Platform} from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
} from 'react-native-gesture-handler';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import {
  Container,
  Map,
  Card,
  CardContainer,
  ContainerTraco,
  Traco,
  ContainerSamu,
  ContainerTextSamu,
  TextSamu,
  ImageAmbulance,
  ContainerInfos,
  ContainerUserInfos,
  ContainerUserLocationIcon,
  LocationIcon,
  ContainerUserAddressInfo,
  TextLocationUserInfos,
  ContainerSamuInfos,
  TextLocationSamuInfos,
  ContainerButtons,
  BtnHelp,
  TextTitleBtnHelp,
  ContainerTextBtnHelp,
  TextBtnHelp,
  ContainerArrow,
  ArrowIcon,
  BtnCancel,
} from './styles';

import carroambulancia from '../../../assets/carro-ambulancia.png';
import location_icon from '../../../assets/location_icon.png';
import seta from '../../../assets/seta.png';
import traço from '../../../assets/traco.png';

const MapInfos: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setAddress] = useState('Aguardando localização...');
  const [samuLocation, setSamuLocation] = useState({
    location: {
      kmToYou: '',
      minutesToYou: '',
    },
  });
  const [region, setRegion] = useState({
    location: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
  });

  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permissão para localização negada!');
        setIsLoading(false);
      }
      const findLocation = await Location.getCurrentPositionAsync({});
      setRegion({
        location: {
          latitude: findLocation.coords.latitude,
          longitude: findLocation.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
      });
      const FindAddress = await Location.reverseGeocodeAsync({
        latitude: findLocation.coords.latitude,
        longitude: findLocation.coords.longitude,
      });
      console.log(FindAddress);
      setAddress(
        `${String(FindAddress[0].street)}, ${String(FindAddress[0].name)}`,
      );
      setSamuLocation({
        location: {
          kmToYou: '4,7 Km',
          minutesToYou: '5 min',
        },
      });
      setIsLoading(false);
    })();
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  function onHandlerStateChanged(
    event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>,
  ) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;
      offset += translationY;
      if (translationY >= 10) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 0 : 100,
        duration: 1,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 0 : 100;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Loader isActive={isLoading} />
      <Map region={region.location}>
        <Marker
          coordinate={{
            latitude: region.location.latitude,
            longitude: region.location.longitude,
          }}
        />
      </Map>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        // eslint-disable-next-line react/jsx-no-bind
        onHandlerStateChange={onHandlerStateChanged}
      >
        <Card
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange:
                    Platform.OS === 'ios' ? [-1, 0, 100] : [-1, 0, 100],
                  outputRange:
                    Platform.OS === 'ios' ? [-1, 160, 0] : [-1, 220, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <CardContainer>
            <ContainerTraco>
              <Traco source={traço} />
            </ContainerTraco>
            <ContainerSamu>
              <ContainerTextSamu>
                <TextSamu>SAMU</TextSamu>
                <TextSamu>a caminho...</TextSamu>
              </ContainerTextSamu>
              <ImageAmbulance source={carroambulancia} />
            </ContainerSamu>
            <ContainerInfos>
              <ContainerUserInfos>
                <ContainerUserLocationIcon>
                  <LocationIcon source={location_icon} />
                </ContainerUserLocationIcon>
                <ContainerUserAddressInfo>
                  <TextLocationUserInfos>Seu local: </TextLocationUserInfos>
                  <TextLocationUserInfos>{userAddress}</TextLocationUserInfos>
                </ContainerUserAddressInfo>
              </ContainerUserInfos>
              <ContainerSamuInfos>
                <TextLocationSamuInfos>
                  {samuLocation.location.kmToYou}
                </TextLocationSamuInfos>
                <TextLocationSamuInfos>
                  {samuLocation.location.minutesToYou}
                </TextLocationSamuInfos>
              </ContainerSamuInfos>
            </ContainerInfos>

            <ContainerButtons>
              <BtnHelp>
                <ContainerTextBtnHelp>
                  <TextTitleBtnHelp>Nos Ajude</TextTitleBtnHelp>
                  <TextBtnHelp>
                    Preencha este formulário, caso tenha mais informações
                  </TextBtnHelp>
                </ContainerTextBtnHelp>
                <ContainerArrow>
                  <ArrowIcon source={seta} />
                </ContainerArrow>
              </BtnHelp>

              <BtnCancel onPress={() => navigation.navigate('Home' as never)}>
                <TextBtnHelp>CANCELAR</TextBtnHelp>
              </BtnCancel>
            </ContainerButtons>
          </CardContainer>
        </Card>
      </PanGestureHandler>
    </Container>
  );
};

export default MapInfos;
