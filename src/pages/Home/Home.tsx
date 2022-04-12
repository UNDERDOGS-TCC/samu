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

import formularioBranco from '../../../assets/formularioBranco.png';
import seguranca from '../../../assets/seguranca.png';
import saude from '../../../assets/saude.png';
import chat from '../../../assets/chat.png';
import usuario from '../../../assets/usuario.png';
import carroambulancia from '../../../assets/carro-ambulancia.png';
import {Button} from 'react-native';
import {Container, Text} from './styles';

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
        <TextGoodMorning>
          Good Morning
          {'\n'}
          <TextNome>Igor Ferráz</TextNome>
        </TextGoodMorning>
        <Image source={usuario as ImageSourcePropType} />
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
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Signup"
        onPress={() => navigation.navigate('Signup' as never)}
      />
      <Button
        title="Reset password"
        onPress={() => navigation.navigate('ResetPassword' as never)}
      />
    </Container>
  );
};

export default Home;
