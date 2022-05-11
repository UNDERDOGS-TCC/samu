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
  OptionContainer,
} from './styles';

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
      <OptionContainer>
        <User>
          <TextGoodMorning>
            Good Morning
            {'\n'}
            <TextNome>Igor Ferráz</TextNome>
          </TextGoodMorning>
          <Image source={usuario} />
        </User>

        <BotaoAmbulancia onPress={() => navigation.navigate('Mapa' as never)}>
          <View>
            <Quadrado>
              <Samu>
                Samu
                {'\n'}
              </Samu>
              <Text>Chamar serviço de emergencia</Text>
            </Quadrado>
            <ImageAmbulance source={carroambulancia} />
          </View>
        </BotaoAmbulancia>
        <TextServicos>Outros Serviços</TextServicos>
        <Rolagem horizontal showsHorizontalScrollIndicator={false}>
          <BotaoOutrosServicos
            onPress={() => navigation.navigate('Config' as never)}
          >
            <Icon source={formularioBranco} />
            <Text>
              {'\n'}
              Formulario de emergência
            </Text>
          </BotaoOutrosServicos>
          <BotaoOutrosServicos
            onPress={() => navigation.navigate('Config' as never)}
          >
            <Icon source={seguranca} />
            <Text>
              {'\n'}
              Orientações de segurança
            </Text>
          </BotaoOutrosServicos>
          <BotaoOutrosServicos
            onPress={() => navigation.navigate('Config' as never)}
          >
            <Icon source={saude} />
            <Text>
              {'\n'}
              Detalhes de saúde
            </Text>
          </BotaoOutrosServicos>
          <BotaoOutrosServicos
            onPress={() => navigation.navigate('Config' as never)}
          >
            <Icon source={chat} />
            <Text>
              {'\n'}
              Inicie uma conversa
            </Text>
          </BotaoOutrosServicos>
        </Rolagem>
      </OptionContainer>
    </Container>
  );
};

export default Home;
