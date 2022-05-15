import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextSamu = styled.Text`
  font-size: 20px;
  margin: 10% 15% 5% 2%;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const TextLocal = styled.Text`
  font-size: 18px;
  margin: 5% 15% 8% 15%;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const TextEndereco = styled.Text`
  font-size: 15px;
  font-weight: normal;
  color: ${(props) => props.theme.main.colors.text};
`;

export const TextAjuda = styled.Text`
  font-size: 20px;
  margin: 0% 0% 3% 7%;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.white};
`;
export const TextInfo = styled.Text`
  margin: 0% 0% 0% 7%;
  color: ${(props) => props.theme.main.colors.white};
`;

export const ImageAmbulance = styled.Image`
  padding: 15%;
  width: 10%;
  height: 10%;
`;
export const ImageTraco = styled.Image`
  width: 18%;
  height: 10%;
  margin: 15% 0% 0% 0%;
`;

export const ViewSamu = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 15% 10% -5% 10%;
`;
export const ViewLocal = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 2% 10% 10% 10%;
`;

export const ViewTraco = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 30% 0% -15% 0%;
`;

export const Seta = styled.View`
  align-items: center;
  flex-direction: row;
  margin: -19% 0% 0% 105%;
`;

export const LocationIcon = styled.Image`
  margin: 0% -14% 4% 5%;
  width: 14%;
  height: 50%;
`;

export const SetaIcon = styled.Image`
  padding: 20px;
  width: 10%;
  height: 10%;
`;

export const Card = styled(Animated.View)`
  border-radius: 10px;
  width: 100%;
  height: 50%;
  margin: 96% 0% 0% 0%;
  border: solid 0.5px ${(props) => props.theme.main.colors.gray};
`;

export const BotaoAjuda = styled.TouchableOpacity`
  border-radius: 8px;
  margin: -11% 0% -1% 0%;
  height: 45%;
  width: 90%;
  background-color: ${(props) => props.theme.main.colors.lightblue};
`;

export const ButtonContainer = styled.View`
  width: 90%;
`;

export const Quadrado = styled.View`
  height: 90%;
  width: 80%;
  margin: 1% 0% 0% 1%;
`;
export const Teste = styled.View`
  font-size: 20px;
  width: 100%;
  height: 50%;
`;
