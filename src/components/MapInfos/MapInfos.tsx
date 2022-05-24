/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Animated, Platform} from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
} from 'react-native-gesture-handler';
import {LocationGeocodedAddress} from 'expo-location';
import Button from '../Button/Button';
import {
  Container,
  Card,
  ButtonContainer,
  BotaoAjuda,
  Seta,
  Quadrado,
  SetaIcon,
  TextInfo,
  TextAjuda,
  TextLocal,
  TextEndereco,
  ViewLocal,
  ViewTraco,
  ViewSamu,
  TextSamu,
  ImageAmbulance,
  ImageTraco,
  LocationIcon,
} from './styles';

import carroambulancia from '../../../assets/carro-ambulancia.png';
import location_icon from '../../../assets/location_icon.png';
import seta from '../../../assets/seta.png';
import traço from '../../../assets/traco.png';

interface MapInfosProps {
  userAddress: LocationGeocodedAddress[];
  samuLocation: {
    kmsToYou: number;
    minutesToYou: number;
  };
}

const MapInfos: React.FC<MapInfosProps> = ({userAddress, samuLocation}) => {
  const navigation = useNavigation();
  const [addressText, setAddressText] = useState('Aguardando localização...');

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

  useEffect(() => {
    console.log(userAddress);
    if (!userAddress[0].street || !userAddress[0].streetNumber) {
      setAddressText(userAddress[0].name!);
      return;
    }

    setAddressText(`${userAddress[0].street}, ${userAddress[0].streetNumber}`);
  }, [userAddress]);

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
                inputRange:
                  Platform.OS === 'ios' ? [-100, 0, 100] : [-100, 0, 100],
                outputRange:
                  Platform.OS === 'ios' ? [-100, 160, 0] : [-100, 220, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
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
              <TextEndereco>{addressText}</TextEndereco>
            </TextLocal>
            <TextLocal>
              {`${samuLocation.kmsToYou} km`}
              {'\n'}
              <TextEndereco>{`${samuLocation.minutesToYou} min`}</TextEndereco>
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
      </Card>
    </PanGestureHandler>
  );
};

export default MapInfos;
