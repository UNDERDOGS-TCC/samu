/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Animated, Platform} from 'react-native';
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
  Teste,
  ViewSamu,
  ViewLocal,
} from './styles';

import carroambulancia from '../../../assets/carro-ambulancia.png';
import location_icon from '../../../assets/location_icon.png';
import seta from '../../../assets/seta.png';
import traço from '../../../assets/traco.png';

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
                inputRange: Platform.OS === 'ios' ? [-1, 0, 100] : [-1, 0, 100],
                outputRange:
                  Platform.OS === 'ios' ? [-1, 160, 0] : [-1, 220, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <Teste>
          <Container>
            <ViewTraco>
              <ImageTraco source={traço} />
            </ViewTraco>
            <ViewSamu>
              <TextSamu>SAMU a caminho...</TextSamu>
              <ImageAmbulance source={carroambulancia} />
            </ViewSamu>
            <ViewLocal>
              <LocationIcon source={location_icon} />
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
                  <SetaIcon source={seta} />
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
        </Teste>
      </Card>
    </PanGestureHandler>
  );
};

export default MapInfos;
