import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../themes/ThemeManagerProvider';
import { Container, Text, InputUser, RedefinirSenha, BotaoEntrar, TextBotao, 
         BotaoCriarConta, Linha, LadoALado, Image} from './styles';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const {isDarkMode} = useTheme();
    const images = {
        Username: require('../../../assets/username.png'),
        Password: require('../../../assets/password.png'),
        LogoPreto: require('../../../assets/LogoPreto.png'),
        LogoBranco: require('../../../assets/LogoBranco.png'),
      };

    return (
        <Container>
                <Image source={isDarkMode ?images.LogoBranco :images.LogoPreto} />
            <InputUser
                placeholder="Username"/>
            <InputUser
                secureTextEntry={true}
                placeholder="Password"/>

            <TouchableOpacity >
                <RedefinirSenha>Redefinir senha</RedefinirSenha>
            </TouchableOpacity>
            <BotaoEntrar
                onPress={() => navigation.navigate('Home' as never)}>
                <TextBotao>Entrar</TextBotao>
            </BotaoEntrar>

            <LadoALado>
                <Linha></Linha>
                <Text>  ou  </Text>
                <Linha></Linha>
            </LadoALado>

            <BotaoCriarConta
                onPress={() => navigation.navigate('Home' as never)}>
                <TextBotao>Criar Conta</TextBotao>
            </BotaoCriarConta>
        </Container>
    );
};

export default Login;

const styles = StyleSheet.create({
});