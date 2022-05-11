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
  ViewSamu,
  ViewLocal,
} from './styles';

const MapInfos: React.FC = () => {
  const navigation = useNavigation();
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
        toValue: opened ? 200 : 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 200 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
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
                inputRange: [-300, 0, 200],
                outputRange: [-50, 0, 200],
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
          <ViewSamu>
            <TextSamu>SAMU a caminho...</TextSamu>
            <ImageAmbulance source={images.carroambulancia} />
          </ViewSamu>
          <ViewLocal>
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
          </ViewLocal>
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
  );
};

export default MapInfos;
