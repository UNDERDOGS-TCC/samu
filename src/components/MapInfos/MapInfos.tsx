import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ImageSourcePropType} from 'react-native';
import Button from '../Button/Button';
import {
  Container,
  ImageAmbulance,
  View,
  LocationIcon,
  Informacoes,
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
} from './styles';

const MapInfos: React.FC = () => {
  const navigation = useNavigation();
  const images = {
    carroambulancia:
      require('../../../assets/carro-ambulancia.png') as ImageSourcePropType,
    location_icon:
      require('../../../assets/location_icon.png') as ImageSourcePropType,
    seta: require('../../../assets/seta.png') as ImageSourcePropType,
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Container>
      <Informacoes>
        <Container>
          <View>
            <TextSamu>SAMU a caminho...</TextSamu>
            <ImageAmbulance source={images.carroambulancia} />
          </View>
          <View>
            <LocationIcon source={images.location_icon} />
            <TextLocal>Seu local</TextLocal>
            <TextEndereco>Rua Coral, Nº 05</TextEndereco>
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
      </Informacoes>
    </Container>
  );
};

export default MapInfos;
