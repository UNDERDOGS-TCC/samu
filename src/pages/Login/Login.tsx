import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import Button from '../../components/Button/Button';
import {useTheme} from '../../themes/ThemeManagerProvider';
import {
  Container,
  Text,
  InputUser,
  RedefinirSenha,
  Linha,
  LadoALado,
  Image,
  ButtonContainer,
} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();
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
      <Image source={isDarkMode ? images.LogoBranco : images.LogoPreto} />
      <InputUser placeholder="Username" />
      <InputUser secureTextEntry placeholder="Password" />
      <TouchableOpacity>
        <RedefinirSenha>Redefinir senha</RedefinirSenha>
      </TouchableOpacity>
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
    </Container>
  );
};
export default Login;
