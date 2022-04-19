import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
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
  flex-direction: row;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-right: 50px;
`;

export const TextGoodMorning = styled.Text`
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
`;

export const TextServicos = styled.Text`
  margin: 5px 160px 0px 0;
  padding: 25px;
  font-size: ${(props) => props.theme.main.font.size.big};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const Text = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.medium};
  margin: -20px 0;
  text-align: center;
  font-weight: normal;
  color: ${(props) => props.theme.main.colors.white};
`;

export const SamuSubtitle = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.medium};
  text-align: center;
  color: ${(props) => props.theme.main.colors.white};
`;

export const BotaoAmbulancia = styled.TouchableOpacity`
  border-radius: 8px;
  height: 166px;
  width: 360px;
  background-color: ${(props) => props.theme.main.colors.primary};
`;

export const Samu = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.main.colors.white};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
`;

export const ImageAmbulance = styled.Image`
  padding: 60px;
  width: 20px;
  height: 20px;
`;

export const Quadrado = styled.View`
  margin: 10px 20px;
  height: 140px;
  width: 150px;
  justify-content: space-evenly;
  align-items: center;
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
