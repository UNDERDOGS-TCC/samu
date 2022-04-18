import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const View = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const User = styled.View`
  align-items: center;
  padding: 80px;
  margin: 15px 0 10px -10px;
  flex-direction: row;
`;
export const TextGoodMorning = styled.Text`
  padding: 10px;
  color: ${(props) => props.theme.main.colors.text};
`;
export const TextNome = styled.Text`
  font-size: 26px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;
export const Image = styled.Image`
  width: 80px;
  height: 80px;
  margin: 0px 0px 0px 50px;
`;
export const TextServicos = styled.Text`
  margin: 5px 160px 0px 0;
  padding: 25px;
  font-size: ${(props) => props.theme.main.font.size.big};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;
export const Text = styled.Text`
  font-size: 16px;
  margin: -20px 0px 0px 0px;
  text-align: center;
  font-weight: normal;
  color: ${(props) => props.theme.main.colors.white};
`;
export const BotaoAmbulancia = styled.TouchableOpacity`
  border-radius: 8px;
  margin: -50px 0 0 0;
  height: 166px;
  width: 360px;
  background-color: ${(props) => props.theme.main.colors.primary};
`;
export const Samu = styled.Text`
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
  color: ${(props) => props.theme.main.colors.white};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
`;
export const ImageAmbulance = styled.Image`
  padding: 60px;
  width: 20px;
  height: 20px;
`;
export const Quadrado = styled.View`
  margin: 10px 20px 10px 20px;
  padding: 10px;
  height: 140px;
  width: 150px;
`;
export const BotaoOutrosServicos = styled.TouchableOpacity`
  margin: 0 10px 80px;
  border-radius: 8px;
  height: 154px;
  width: 123px;
  background-color: ${(props) => props.theme.main.colors.secondary};
`;
export const Rolagem = styled.ScrollView``;

export const Icon = styled.Image`
  width: 60px;
  height: 60px;
  margin: 20px 20px 20px 30px;
`;
export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
