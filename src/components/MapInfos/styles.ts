import {Animated, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Map = styled(MapView)`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const Container = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextSamu = styled.Text`
  font-size: 20px;
  margin: 10px 25px 85px 0px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const TextLocal = styled.Text`
  font-size: 18px;
  margin: 10px 50px 0px 40px;
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
  margin: 10px 10px 3px 20px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.white};
`;
export const TextInfo = styled.Text`
  margin: 0px 0px 0px 20px;
  color: ${(props) => props.theme.main.colors.white};
`;

export const ImageAmbulance = styled.Image`
  padding: 40px;
  width: 10px;
  height: 10px;
  margin: 5px 10px 80px 20px;
`;
export const ImageTraco = styled.Image`
  padding: 30px;
  width: 5px;
  height: 5px;
  margin: 10px;
`;

export const View = styled.View`
  align-items: center;
  flex-direction: row;
  margin: -80px -20px -8px 0px;
`;

export const ViewTraco = styled.View`
  padding: 0px 0px 60px 0px;
  align-items: center;
  flex-direction: row;
  margin: -80px 0px -30px 0px;
`;

export const Seta = styled.View`
  align-items: center;
  flex-direction: row;
  margin: -50px -10px 0px 275px;
`;

export const LocationIcon = styled.Image`
  padding: 25px;
  margin: 0px -40px 0px -10px;
  width: 10px;
  height: 10px;
`;

export const SetaIcon = styled.Image`
  padding: 20px;
  width: 10px;
  height: 10px;
`;

export const Card = styled(Animated.View)`
  position: absolute;
  bottom: 15px;
  border-radius: 10px;
  margin: 400px 0 0 0;
  height: 380px;
  width: 380px;
  background-color: ${(props) => props.theme.main.colors.background};
  border: solid 0.5px ${(props) => props.theme.main.colors.gray};
`;

export const BotaoAjuda = styled.TouchableOpacity`
  border-radius: 8px;
  margin: -100px 0 0 0;
  height: 85px;
  width: 341px;
  background-color: ${(props) => props.theme.main.colors.lightblue};
`;

export const ButtonContainer = styled.View`
  width: 90%;
`;

export const Quadrado = styled.View`
  height: 95px;
  width: 270px;
  margin: 2px 10px 10px 10px;
`;
