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
import {
  Container,
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
    if (!userAddress[0].street || !userAddress[0].streetNumber) {
      setAddressText(userAddress[0].name!);
      return;
    }

    setAddressText(`${userAddress[0].street}, ${userAddress[0].streetNumber}`);
  }, [userAddress]);

  return (
    <Container>
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
                  <TextLocationUserInfos>{addressText}</TextLocationUserInfos>
                </ContainerUserAddressInfo>
              </ContainerUserInfos>
              <ContainerSamuInfos>
                <TextLocationSamuInfos>
                  {`${samuLocation.kmsToYou} km`}
                </TextLocationSamuInfos>
                <TextLocationSamuInfos>
                  {`${samuLocation.minutesToYou} min`}
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
