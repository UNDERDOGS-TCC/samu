import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextSamu = styled.Text`
  font-size: 21px;
  margin: 4% 10% 5% 5%;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const TextLocal = styled.Text`
  font-size: 20px;
  margin: -15% 12% 0% 10%;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const TextEndereco = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: ${(props) => props.theme.main.colors.text};
`;

export const TextAjuda = styled.Text`
  font-size: 17px;
  margin: 2% 1% 1% 5%;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.white};
`;
export const TextInfo = styled.Text`
  margin: 0 0 0 5%;
  color: ${(props) => props.theme.main.colors.white};
`;

export const ImageAmbulance = styled.Image`
  padding: 10%;
  width: 10%;
  height: 10%;
  margin: 0% 0% 3% 5%;
`;
export const ImageTraco = styled.Image`
  padding: 10%;
  width: 5%;
  height: 5%;
  margin: -8%;
`;

export const ViewSamu = styled.View`
  align-items: center;
  flex-direction: row;
  width: 90%;
  height: 16%;
`;
export const ViewLocal = styled.View`
  align-items: center;
  flex-direction: row;
  width: 90%;
  height: 26%;
`;

export const ViewTraco = styled.View`
  align-items: center;
  margin-top: -6%;
  width: 90%;
  height: 5%;
`;

export const Seta = styled.View`
  align-items: center;
  flex-direction: row;
  margin: -17% 0 0 102%;
`;

export const LocationIcon = styled.Image`
  padding: 7%;
  margin: -12% -10% 3% 0%;
  width: 10%;
  height: 10%;
`;

export const SetaIcon = styled.Image`
  padding: 20px;
  width: 10%;
  height: 10%;
`;

export const Card = styled(Animated.View)`
  border-radius: 20px;
  margin: 95% 0 0 0;
  height: 55%;
  width: 100%;
  border: solid 0.5px ${(props) => props.theme.main.colors.gray};
`;

export const BotaoAjuda = styled.TouchableOpacity`
  border-radius: 8px;
  height: 18%;
  width: 90%;
  background-color: ${(props) => props.theme.main.colors.lightblue};
`;

export const ButtonContainer = styled.View`
  width: 90%;
`;

export const Quadrado = styled.View`
  height: 95%;
  width: 80%;
  margin: 0 0 20% 2%;
`;
