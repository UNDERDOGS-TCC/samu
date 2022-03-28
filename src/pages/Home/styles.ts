import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
`;
export const View = styled.View`
  flex: 1;
  flexDirection: row;
  alignItems: center;
`;
export const User = styled.View`
  alignItems: center;
  padding: 15px;
  marginRight: 25px;
  flexDirection: row;
`;
export const TextGoodMorning = styled.Text`
  paddingHorizontal: 30px;
  color: ${(props) => props.theme.main.colors.text};
`;
export const TextNome = styled.Text`
  fontSize: ${(props) => props.theme.main.font.size.big};
  fontWeight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;
export const Image = styled.Image`
  width: 80px;
  height: 80px;
  marginLeft: 20px;
`;
export const TextServicos = styled.Text`
  marginRight: 150px;
  padding: 25px;
  fontSize: ${(props) => props.theme.main.font.size.big};
  fontWeight: ${(props) => props.theme.main.font.weight.bold}; 
  color: ${(props) => props.theme.main.colors.text};
`;
export const ChamarserviçodeemergenciaText = styled.Text`
  fontSize: 16px;
  marginVertical: -20px;
  text-align: center;
  font-weight: normal;
  color: ${(props) => props.theme.main.colors.text};
`;
export const BotaoAmbulancia = styled.TouchableOpacity`
  border-radius: 8px;
  marginTop: 30px;
  height: 166px;
  width: 342px;
  background-color: ${(props) => props.theme.main.colors.primary};
`;
export const Samu = styled.Text`
  text-align: center; 
  fontSize: 30px;
  marginTop: 10px;
  color: ${(props) => props.theme.main.colors.text};
  fontWeight: ${(props) => props.theme.main.font.weight.bold};
`;
export const ImageAmbulance = styled.Image`
  padding: 60px;
  width: 20px;
  height: 20px;
  marginTop: 5px;
  marginLeft: 10px;
`;
export const Quadrado = styled.View`
  border-radius: 8px;
  marginLeft: 20px;
  marginTop: 5px;
  padding: 10px;
  height: 140px;
  width: 150px;
  background-color: ${(props) => props.theme.main.colors.primary};
`;
export const BotaoOutrosServicos = styled.TouchableOpacity`
  marginHorizontal: 8px;
  marginTop: -50px;
  border-radius: 8px;
  height: 154px;
  width: 123px;
  background-color: ${(props) => props.theme.main.colors.secondary};
`;

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
