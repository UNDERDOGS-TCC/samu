import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  Container,
  User,
  TextGoodMorning,
  TextNome,
  Image,
  TextServicos,
  BotaoAmbulancia,
  Samu,
  ChamarserviçodeemergenciaText,
  ImageAmbulance,
  View,
  Quadrado,
  BotaoOutrosServicos,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const images = {
    usuario: require('../../../assets/usuario.png') as ImageSourcePropType,
    carroambulancia:
      require('../../../assets/carro-ambulancia.png') as ImageSourcePropType,
  };

  return (
    <Container>
      <User>
        <TextGoodMorning>
          Good Morning
          {'\n'}
          <TextNome>Igor Ferráz</TextNome>
        </TextGoodMorning>
        <Image source={images.usuario} />
      </User>

      <BotaoAmbulancia onPress={() => navigation.navigate('Config' as never)}>
        <View>
          <Quadrado>
            <Samu>
              Samu
              {'\n'}
            </Samu>
            <ChamarserviçodeemergenciaText>
              Chamar serviço de emergencia
            </ChamarserviçodeemergenciaText>
          </Quadrado>
          <ImageAmbulance source={images.carroambulancia} />
        </View>
      </BotaoAmbulancia>

      <TextServicos>Outros Serviços</TextServicos>

      <View>
        <BotaoOutrosServicos />
        <BotaoOutrosServicos />
        <BotaoOutrosServicos />
        <BotaoOutrosServicos />
        <BotaoOutrosServicos />
      </View>
    </Container>
  );
};

export default Home;
