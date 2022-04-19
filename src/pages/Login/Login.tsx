import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {useTheme} from '../../contexts/ThemeManagerProvider';
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
} from './styles';

import logopreto from '../../../assets/LogoPreto.png';
import logobranco from '../../../assets/LogoBranco.png';
import {useAuth} from '../../contexts/AuthProvider';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, user} = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <Container>
      <Image
        source={
          isDarkMode
            ? (logobranco as ImageSourcePropType)
            : (logopreto as ImageSourcePropType)
        }
      />
      <InputContainer>
        <Input
          title="E-mail"
          placeholder="Informe o e-mail"
          isPassword={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
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
          active={!!email && !!password}
          onPress={handleLogin}
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
          onPress={() => navigation.navigate('Signup' as never)}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Login;
