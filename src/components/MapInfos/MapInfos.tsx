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
} from './styles';

import carroambulancia from '../../../assets/carro-ambulancia.png';
import location_icon from '../../../assets/location_icon.png';
import seta from '../../../assets/seta.png';
import traço from '../../../assets/traco.png';

const MapInfos: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
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
        toValue: opened ? 180 : 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 180 : 0;
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
                    Platform.OS === 'ios' ? [-350, 0, 180] : [-200, 0, 180],
                  outputRange:
                    Platform.OS === 'ios' ? [-50, 0, 180] : [-50, 0, 180],
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
                  <TextLocationUserInfos>
                    Rua Valdomiro Gonzaga Silva, 873
                  </TextLocationUserInfos>
                </ContainerUserAddressInfo>
              </ContainerUserInfos>
              <ContainerSamuInfos>
                <TextLocationSamuInfos>4,5 Km</TextLocationSamuInfos>
                <TextLocationSamuInfos>15 Min</TextLocationSamuInfos>
              </ContainerSamuInfos>
            </ContainerInfos>
          </CardContainer>
        </Card>
      </PanGestureHandler>
    </Container>
    /* <PanGestureHandler
        onGestureEvent={animatedEvent}
        // eslint-disable-next-line react/jsx-no-bind
        onHandlerStateChange={onHandlerStateChanged}
      >
        <Card
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 180],
                  outputRange: [-50, 0, 180],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <Container>
            <ViewTraco>
              <ImageTraco source={images.traço} />
            </ViewTraco>
            <View>
              <TextSamu>SAMU a caminho...</TextSamu>
              <ImageAmbulance source={images.carroambulancia} />
            </View>
            <View>
              <LocationIcon source={images.location_icon} />
              <TextLocal>
                Seu local
                {'\n'}
                <TextEndereco>Rua Coral, Nº 05</TextEndereco>
              </TextLocal>
              <TextLocal>
                20 KM
                {'\n'}
                <TextEndereco>35m</TextEndereco>
              </TextLocal>
            </View>
          </Container>
          <Container>
            <BotaoAjuda>
              <Quadrado>
                <TextAjuda>Nos Ajude</TextAjuda>
                <TextInfo>
                  Preencha este formulário, caso tenha mais informações
                </TextInfo>
                <Seta>
                  <SetaIcon source={images.seta} />
                </Seta>
              </Quadrado>
            </BotaoAjuda>
            <ButtonContainer>
              <Button
                title="Cancelar"
                danger
                active
                onPress={() => navigation.navigate('Home' as never)}
              />
            </ButtonContainer>
          </Container>
        </Card>
      </PanGestureHandler> */
  );
};

export default MapInfos;
