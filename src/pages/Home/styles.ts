import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const OptionContainer = styled.View`
  height: 95%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const View = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const User = styled.View`
  align-items: center;
  padding: 12%;
  margin: 10% 0 13% 0;
  flex-direction: row;
`;
export const TextGoodMorning = styled.Text`
  padding: 3.5%;
  color: ${(props) => props.theme.main.colors.text};
`;
export const TextNome = styled.Text`
  font-size: 26px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;
export const Image = styled.Image`
  width: 28%;
  height: 116%;
  margin: 0 0 0 20%;
`;
export const TextServicos = styled.Text`
  margin: 0 20% 0 -25%;
  padding: 28px;
  font-size: ${(props) => props.theme.main.font.size.big};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;
export const Text = styled.Text`
  font-size: 16px;
  margin: -15% 0px 0px 0px;
  text-align: center;
  font-weight: normal;
  color: ${(props) => props.theme.main.colors.white};
`;
export const BotaoAmbulancia = styled.TouchableOpacity`
  border-radius: 8px;
  margin: -12% 0 0 0;
  height: 26%;
  width: 95%;
  background-color: ${(props) => props.theme.main.colors.primary};
`;
export const Samu = styled.Text`
  text-align: center;
  font-size: 30px;
  margin: 8% 0 0 0;
  color: ${(props) => props.theme.main.colors.white};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
`;
export const ImageAmbulance = styled.Image`
  padding: 60px;
  width: 10%;
  height: 10%;
`;
export const Quadrado = styled.View`
  margin: 10% 10% 10% 8%;
  padding: 10px;
  height: 80%;
  width: 40%;
`;
export const BotaoOutrosServicos = styled.TouchableOpacity`
  border-radius: 8px;
  margin: 0 10px 80px;
  height: 180px;
  width: 140px;
  background-color: ${(props) => props.theme.main.colors.secondary};
`;
export const Rolagem = styled.ScrollView``;

export const Icon = styled.Image`
  width: 60%;
  height: 50%;
  align-items: center;
  margin: 10% 30% 18% 20%;
`;
