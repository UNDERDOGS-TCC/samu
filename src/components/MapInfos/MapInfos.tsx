/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import {ImageSourcePropType, Animated} from 'react-native';
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
  ImageAmbulance,
  View,
  LocationIcon,
  TextSamu,
  TextLocal,
  TextEndereco,
  BotaoAjuda,
  TextAjuda,
  TextInfo,
  Quadrado,
  SetaIcon,
  Seta,
  ButtonContainer,
  ImageTraco,
  ViewTraco,
  Card,
  Map,
} from './styles';

const MapInfos: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(String);
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
  const images = {
    carroambulancia:
      require('../../../assets/carro-ambulancia.png') as ImageSourcePropType,
    location_icon:
      require('../../../assets/location_icon.png') as ImageSourcePropType,
    seta: require('../../../assets/seta.png') as ImageSourcePropType,
    traço: require('../../../assets/traco.png') as ImageSourcePropType,
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const {status} = await Location.requestBackgroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        alert(errorMsg);
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
      </PanGestureHandler>
      <Loader isActive={isLoading} />
    </Container>
  );
};

export default MapInfos;
