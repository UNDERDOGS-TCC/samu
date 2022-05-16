import {Animated, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0;
  padding: 0;
  position: relative;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: blue;
`;

export const Map = styled(MapView)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Card = styled(Animated.View)`
  border-radius: 10px;
  margin-bottom: 1%;
  height: 40%;
  width: 95%;
  padding: 0;
  background-color: ${(props) => props.theme.colors.background};
  border: solid 0.5px ${(props) => props.theme.main.colors.gray};
`;

export const CardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerTraco = styled.View`
  align-items: center;
  top: -10%;
  justify-content: center;
  height: 10%;
  width: 95%;
`;

export const Traco = styled.Image`
  width: 18%;
  height: 100%;
`;

export const ContainerSamu = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40%;
  width: 80%;
  margin-bottom: 15px;
`;

export const ContainerTextSamu = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 50%;
`;

export const TextSamu = styled.Text`
  font-size: 20px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const ImageAmbulance = styled.Image`
  height: 130%;
  width: auto;
  aspect-ratio: 1;
`;

export const ContainerInfos = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  width: 95%;
`;

export const ContainerUserInfos = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 50%;
`;

export const ContainerUserLocationIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  height: 100%;
  width: 20%;
`;

export const ContainerUserAddressInfo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 80%;
`;

export const LocationIcon = styled.Image`
  width: auto;
  height: 100%;
  aspect-ratio: 1;
`;

export const ContainerSamuInfos = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
`;

export const TextLocationSamuInfos = styled.Text`
  font-size: 18px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const TextLocationUserInfos = styled.Text`
  font-size: 14px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
  margin-left: 10px;
`;

// export const TextLocal = styled.Text`
//   font-size: 18px;
//   margin: 10px 50px 0px 40px;
//   font-weight: ${(props) => props.theme.main.font.weight.bold};
//   color: ${(props) => props.theme.main.colors.text};
// `;

// export const TextEndereco = styled.Text`
//   font-size: 15px;
//   font-weight: normal;
//   color: ${(props) => props.theme.main.colors.text};
// `;

// export const TextAjuda = styled.Text`
//   font-size: 20px;
//   margin: 10px 10px 3px 20px;
//   font-weight: ${(props) => props.theme.main.font.weight.bold};
//   color: ${(props) => props.theme.main.colors.white};
// `;
// export const TextInfo = styled.Text`
//   margin: 0px 0px 0px 20px;
//   color: ${(props) => props.theme.main.colors.white};
// `;

// export const ImageAmbulance = styled.Image`
//   padding: 40px;
//   width: 10px;
//   height: 10px;
//   margin: 5px 10px 80px 20px;
// `;
// export const ImageTraco = styled.Image`
//   padding: 30px;
//   width: 5px;
//   height: 5px;
//   margin: 10px;
// `;

// export const View = styled.View`
//   align-items: center;
//   flex-direction: row;
//   margin: -80px -20px -8px 0px;
// `;

// export const ViewTraco = styled.View`
//   padding: 0px 0px 60px 0px;
//   align-items: center;
//   flex-direction: row;
//   margin: -80px 0px -30px 0px;
// `;

// export const Seta = styled.View`
//   align-items: center;
//   flex-direction: row;
//   margin: -50px -10px 0px 275px;
// `;

// export const LocationIcon = styled.Image`
//   padding: 25px;
//   margin: 0px -40px 0px -10px;
//   width: 10px;
//   height: 10px;
// `;

// export const SetaIcon = styled.Image`
//   padding: 20px;
//   width: 10px;
//   height: 10px;
// `;

// export const Card = styled(Animated.View)`
//   position: absolute;
//   bottom: 15px;
//   border-radius: 10px;
//   margin: 400px 0 0 0;
//   height: 380px;
//   width: 380px;
//   background-color: ${(props) => props.theme.main.colors.background};
//   border: solid 0.5px ${(props) => props.theme.main.colors.gray};
// `;

// export const BotaoAjuda = styled.TouchableOpacity`
//   border-radius: 8px;
//   margin: -100px 0 0 0;
//   height: 85px;
//   width: 341px;
//   background-color: ${(props) => props.theme.main.colors.lightblue};
// `;

// export const ButtonContainer = styled.View`
//   width: 90%;
// `;

// export const Quadrado = styled.View`
//   height: 95px;
//   width: 270px;
//   margin: 2px 10px 10px 10px;
// `;
