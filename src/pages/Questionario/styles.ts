import styled from 'styled-components/native';
import Checkbox from 'expo-checkbox';

export const Titulo = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.medium};
  font-size: ${(props) => props.theme.main.font.size.big};
  color: ${(props) => props.theme.main.colors.text};
  margin-top: 50px;
  margin-left: 5px;
  margin-bottom: 50px;
  text-align: center;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.main.colors.primary};
  border-width: 0.5px;
  border-style: solid;
  border-color: gray;
`;

export const Texto = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  font-size: ${(props) => props.theme.main.font.size.regular};
  color: ${(props) => props.theme.main.colors.white};
`;

export const Check = styled(Checkbox)`
  margin: 25px;
`;

export const Textott = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  font-size: ${(props) => props.theme.main.font.size.regular};
  color: ${(props) => props.theme.main.colors.white};
  text-align: center;
  margin-top: 15;
`;

export const BotaoAnterior = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.main.colors.gray};
  flex: 1;
  height: 50;
`;

export const BotaoProximo = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.main.colors.primary};
  flex: 1;
  height: 50;
`;

export const Input = styled.TextInput`
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  height: 90;
  border-width: 1;
  margin: 10px;
  padding: 10px;
`;
