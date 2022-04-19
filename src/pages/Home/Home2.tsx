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
  TextContainer,
  SamuSubtitle,
} from './styles2';

import formularioBranco from '../../../assets/formularioBranco.png';
import seguranca from '../../../assets/seguranca.png';
import saude from '../../../assets/saude.png';
import chat from '../../../assets/chat.png';
import usuario from '../../../assets/usuario.png';
import carroambulancia from '../../../assets/carro-ambulancia.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Home',
    });
  }, [navigation]);

  return (
    <Container>
      <User>
        <TextContainer>
          <TextGoodMorning>Good Morning</TextGoodMorning>
          <TextNome>Igor Ferráz</TextNome>
        </TextContainer>
        <Image source={usuario as ImageSourcePropType} />
      </User>

      <BotaoAmbulancia onPress={() => navigation.navigate('Mapa' as never)}>
        <View>
          <Quadrado>
            <Samu>Samu</Samu>
            <SamuSubtitle>Chamar serviço de emergencia</SamuSubtitle>
          </Quadrado>
          <ImageAmbulance source={carroambulancia as ImageSourcePropType} />
        </View>
      </BotaoAmbulancia>

      <TextServicos>Outros Serviços</TextServicos>

      <Rolagem horizontal>
        <BotaoOutrosServicos
          onPress={() => navigation.navigate('Config' as never)}
        >
          <Icon source={formularioBranco as ImageSourcePropType} />
          <Text>
            {'\n'}
            Formulario de emergência
          </Text>
        </BotaoOutrosServicos>
        <BotaoOutrosServicos
          onPress={() => navigation.navigate('Config' as never)}
        >
          <Icon source={seguranca as ImageSourcePropType} />
          <Text>
            {'\n'}
            Orientações de segurança
          </Text>
        </BotaoOutrosServicos>
        <BotaoOutrosServicos
          onPress={() => navigation.navigate('Config' as never)}
        >
          <Icon source={saude as ImageSourcePropType} />
          <Text>
            {'\n'}
            Detalhes de saúde
          </Text>
        </BotaoOutrosServicos>
        <BotaoOutrosServicos
          onPress={() => navigation.navigate('Config' as never)}
        >
          <Icon source={chat as ImageSourcePropType} />
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
