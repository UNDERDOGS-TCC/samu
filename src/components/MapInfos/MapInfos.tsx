import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  BottomInfosContainer,
  BottomInfosLeftContainer,
  BottomInfosLeftIcon,
  BottomInfosLeftIconContainer,
  BottomInfosLeftInfos,
  BottomInfosLeftText,
  BottomInfosRightContainer,
  BottomInfosRightText,
  Container,
  GrayBar,
  GrayBarContainer,
  InfosContainer,
  SamuImage,
  TopInfosContainer,
  TopInfosLeftContainer,
  TopInfosLeftText,
  TopInfosRightContainer,
} from './styles';
import grayBar from '../../../assets/traco.png';
import samuImage from '../../../assets/carro-ambulancia.png';
import locationIcon from '../../../assets/location_icon.png';

const MapInfos: React.FC = () => {
  console.log('a');

  return (
    <Container>
      <GrayBarContainer>
        <GrayBar source={grayBar as ImageSourcePropType} />
      </GrayBarContainer>
      <InfosContainer>
        <TopInfosContainer>
          <TopInfosLeftContainer>
            <TopInfosLeftText>SAMU a caminho...</TopInfosLeftText>
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
              <BottomInfosLeftText>R. Cap. Rubens, 768</BottomInfosLeftText>
            </BottomInfosLeftInfos>
          </BottomInfosLeftContainer>
          <BottomInfosRightContainer>
            <BottomInfosRightText>12 km</BottomInfosRightText>
            <BottomInfosRightText>13 min</BottomInfosRightText>
          </BottomInfosRightContainer>
        </BottomInfosContainer>
      </InfosContainer>
    </Container>
  );
};

export default MapInfos;
