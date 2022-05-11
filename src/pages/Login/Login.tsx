import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {useTheme} from '../../themes/ThemeManagerProvider';
import {
  Container,
  Text,
  Linha,
  LadoALado,
  Image,
  ButtonContainer,
  InputContainer,
  RedefinirSenhaText,
  RedefinirSenhaButton,
  OptionContainer,
  ImageContainer,
} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const images = {
    LogoPreto: require('../../../assets/LogoPreto.png') as ImageSourcePropType,
    LogoBranco:
      require('../../../assets/LogoBranco.png') as ImageSourcePropType,
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Container>
      <OptionContainer>
        <ImageContainer>
          <Image source={isDarkMode ? images.LogoBranco : images.LogoPreto} />
        </ImageContainer>
        <InputContainer>
          <Input
            title="E-mail"
            placeholder="Informe o e-mail"
            isPassword={false}
            value={user}
            onChangeText={(text) => setUser(text)}
          />
        </InputContainer>
        <InputContainer>
          <Input
            title="Senha"
            placeholder="Informe a senha"
            isPassword
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </InputContainer>
        <RedefinirSenhaButton>
          <RedefinirSenhaText>Redefinir senha</RedefinirSenhaText>
        </RedefinirSenhaButton>
        <ButtonContainer>
          <Button
            title="Entrar"
            active
            onPress={() => navigation.navigate('Home' as never)}
          />
        </ButtonContainer>
        <LadoALado>
          <Linha />
          <Text> ou </Text>
          <Linha />
        </LadoALado>

        <ButtonContainer>
          <Button
            title="Criar Conta"
            secondary
            active
            onPress={() => navigation.navigate('Home' as never)}
          />
        </ButtonContainer>
      </OptionContainer>
    </Container>
  );
};
export default Login;
