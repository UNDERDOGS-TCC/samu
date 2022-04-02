import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
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
  Text,
  ImageAmbulance,
  View,
  Quadrado,
  BotaoOutrosServicos,
  Rolagem,
  Icon,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const images = {
    formularioBranco:
      require('../../../assets/formularioBranco.png') as ImageSourcePropType,
    seguranca: require('../../../assets/seguranca.png') as ImageSourcePropType,
    saude: require('../../../assets/saude.png') as ImageSourcePropType,
    chat: require('../../../assets/chat.png') as ImageSourcePropType,
    usuario: require('../../../assets/usuario.png') as ImageSourcePropType,
    carroambulancia:
      require('../../../assets/carro-ambulancia.png') as ImageSourcePropType,
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
            <Text>Chamar serviço de emergencia</Text>
          </Quadrado>
          <ImageAmbulance source={images.carroambulancia} />
        </View>
      </BotaoAmbulancia>

      <TextServicos>Outros Serviços</TextServicos>

      <Rolagem horizontal>
        <BotaoOutrosServicos
          onPress={() => navigation.navigate('Config' as never)}
        >
          <Icon source={images.formularioBranco} />
          <Text>
            {'\n'}
            Formulario de emergência
          </Text>
        </BotaoOutrosServicos>
        <BotaoOutrosServicos
          onPress={() => navigation.navigate('Config' as never)}
        >
          <Icon source={images.seguranca} />
          <Text>
            {'\n'}
            Orientações de segurança
          </Text>
        </BotaoOutrosServicos>
        <BotaoOutrosServicos
          onPress={() => navigation.navigate('Config' as never)}
        >
          <Icon source={images.saude} />
          <Text>
            {'\n'}
            Detalhes de saúde
          </Text>
        </BotaoOutrosServicos>
        <BotaoOutrosServicos
          onPress={() => navigation.navigate('Config' as never)}
        >
          <Icon source={images.chat} />
          <Text>
            {'\n'}
            Inicie uma conversa
          </Text>
        </BotaoOutrosServicos>
      </Rolagem>
    </Container>
  );
};

export default Home;
