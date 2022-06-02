import React, {useEffect, useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import {LocationGeocodedAddress} from 'expo-location';
import {useNavigation} from '@react-navigation/native';
import {
  BottomInfosContainer,
  BottomInfosLeftContainer,
  BottomInfosLeftIcon,
  BottomInfosLeftIconContainer,
  BottomInfosLeftInfos,
  BottomInfosLeftText,
  BottomInfosRightContainer,
  BottomInfosRightText,
  ButtonsContainer,
  ButtonWithInfos,
  ButtonWithInfosIcon,
  ButtonWithInfosIconContainer,
  ButtonWithInfosTextContainer,
  ButtonWithInfosTextDescription,
  ButtonWithInfosTextTitle,
  Container,
  InfosContainer,
  SamuImage,
  TopInfosContainer,
  TopInfosLeftContainer,
  TopInfosLeftText,
  TopInfosRightContainer,
} from './styles';
import samuImage from '../../../assets/carro-ambulancia.png';
import locationIcon from '../../../assets/location_icon.png';
import seta from '../../../assets/seta.png';
import Button from '../Button/Button';

interface MapInfosProps {
  userAddress: LocationGeocodedAddress[];
  samuLocation: {km: number; min: number};
}

const MapInfos: React.FC<MapInfosProps> = ({userAddress, samuLocation}) => {
  const [addressText, setAddressText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    console.log(userAddress);
    if (!userAddress[0].street || !userAddress[0].streetNumber) {
      setAddressText(userAddress[0].name!);
      return;
    }

    setAddressText(`${userAddress[0].street}, ${userAddress[0].streetNumber}`);
  }, [userAddress]);

  return (
    <Container>
      <InfosContainer>
        <TopInfosContainer>
          <TopInfosLeftContainer>
            <TopInfosLeftText>SAMU</TopInfosLeftText>
            <TopInfosLeftText>a caminho...</TopInfosLeftText>
          </TopInfosLeftContainer>
          <TopInfosRightContainer>
            <SamuImage source={samuImage as ImageSourcePropType} />
          </TopInfosRightContainer>
        </TopInfosContainer>
        <BottomInfosContainer>
          <BottomInfosLeftContainer>
            <BottomInfosLeftIconContainer>
              <BottomInfosLeftIcon
                source={locationIcon as ImageSourcePropType}
              />
            </BottomInfosLeftIconContainer>
            <BottomInfosLeftInfos>
              <BottomInfosLeftText>Seu local:</BottomInfosLeftText>
              <BottomInfosLeftText>{addressText}</BottomInfosLeftText>
            </BottomInfosLeftInfos>
          </BottomInfosLeftContainer>
          <BottomInfosRightContainer>
            <BottomInfosRightText>
              {`${samuLocation.km} km`}
            </BottomInfosRightText>
            <BottomInfosRightText>
              {`${samuLocation.min} min`}
            </BottomInfosRightText>
          </BottomInfosRightContainer>
        </BottomInfosContainer>
      </InfosContainer>
      <ButtonsContainer>
        <ButtonWithInfos>
          <ButtonWithInfosTextContainer>
            <ButtonWithInfosTextTitle>Nos ajude</ButtonWithInfosTextTitle>
            <ButtonWithInfosTextDescription>
              Preencha este formulário, caso tenha mais informações
            </ButtonWithInfosTextDescription>
          </ButtonWithInfosTextContainer>
          <ButtonWithInfosIconContainer>
            <ButtonWithInfosIcon source={seta as ImageSourcePropType} />
          </ButtonWithInfosIconContainer>
        </ButtonWithInfos>
        <Button
          active
          title="Cancelar"
          danger
          onPress={() => {
            navigation.reset({index: 0, routes: [{name: 'Sidebar' as never}]});
          }}
        />
      </ButtonsContainer>
    </Container>
  );
};

export default MapInfos;
