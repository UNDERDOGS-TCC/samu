import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  height: 40%;
  width: 100%;
`;

export const Card = styled(Animated.View)`
  border-radius: 10px;
  margin-bottom: 1%;
  height: 100%;
  width: 100%;
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
  height: 20%;
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
  font-size: 18px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const ImageAmbulance = styled.Image`
  height: 120%;
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
  margin-bottom: 10px;
`;

export const ContainerUserInfos = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 60%;
`;

export const ContainerUserLocationIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
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
  width: 40%;
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

export const ContainerButtons = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40%;
  width: 95%;
`;

export const BtnHelp = styled.TouchableOpacity`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 55%;
  width: 100%;
  background-color: ${(props) => props.theme.main.colors.lightblue};
`;

export const ContainerTextBtnHelp = styled.View`
  display: flex;
  padding: 0 10px 0 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 80%;
`;

export const ContainerArrowBtnHelp = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
  height: 40%;
  width: 100%;
`;

export const TextTitleBtnHelp = styled.Text`
  font-size: 18px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.white};
`;

export const TextBtnHelp = styled.Text`
  font-size: 14px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.white};
`;

export const ContainerArrow = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 20%;
`;

export const ArrowIcon = styled.Image`
  width: 50%;
  height: auto;
  aspect-ratio: 1;
`;

export const BtnCancel = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 40%;
  width: 100%;
  background-color: ${(props) => props.theme.main.colors.danger};
`;
