/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ImageSourcePropType, Animated} from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
} from 'react-native-gesture-handler';
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
  const initialRegion = {
    latitude: -23.56498,
    longitude: -46.63327,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

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
      <Map region={initialRegion} />
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
    </Container>
  );
};

export default MapInfos;
