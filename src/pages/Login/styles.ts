import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const Text = styled.Text`
  fontSize: ${(props) => props.theme.main.font.size.big};
  color: ${(props) => props.theme.main.colors.text};
`;
export const InputUser = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.main.colors.text,
}))`
  borderRadius: 8px;
  height: 60px;
  width: 332px;
  borderWidth: 0.5px;
  marginTop: 10px;
  padding: 15px;
  fontSize: ${(props) => props.theme.main.font.size.regular};
  background-color: ${(props) => props.theme.main.colors.background};
  borderColor: ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.main.colors.white};
`;

export const RedefinirSenha = styled.Text`
  textDecorationLine: underline;
  marginTop: 5px;
  marginLeft: 200px;
  fontSize: ${(props) => props.theme.main.font.size.regular};
  color: ${(props) => props.theme.main.colors.text};
`;

export const BotaoEntrar = styled.TouchableOpacity`
  borderRadius: 8px;
  height: 60px;
  width: 332px;
  alignItems: center;
  justifyContent: center;
  marginTop: 35px;
  marginVertical: 15px;
  background-color: ${(props) => props.theme.main.colors.lightblue};
`;

export const BotaoCriarConta = styled.TouchableOpacity`
  borderRadius: 8px;
  height: 60px;
  width: 332px;
  alignItems: center;
  justifyContent: center;
  marginVertical: 20px;
  background-color: ${(props) => props.theme.main.colors.darkblue};
`;

export const TextBotao = styled.Text`
  fontSize: ${(props) => props.theme.main.font.size.big};
  fontWeight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.white};
`;

export const Linha = styled.View`
  height: 0px;
  width: 140px;
  marginTop: 5px;
  border: 1px solid  ${(props) => props.theme.main.colors.gray};
`;
export const LadoALado = styled.View`
  flex: 1;
  flexDirection: row;
  alignItems: center;
  marginVertical: 2px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 100px;
  marginTop: 50px;
  marginVertical: 50px;
`;
export const ImageIcon = styled.Image`
  width: 10px;
  height: 10px;
`;

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});