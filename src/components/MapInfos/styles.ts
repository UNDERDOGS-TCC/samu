import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextSamu = styled.Text`
  font-size: 20px;
  margin: 10px 10px 85px 0px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
`;

export const TextLocal = styled.Text`
  font-size: 20px;
  margin: 0px 0px 20px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
`;

export const TextEndereco = styled.Text`
  padding: 20px 10px 0px 0px;
  margin: 0px 180px -10px -82px;
`;
export const TextAjuda = styled.Text`
  font-size: 20px;
  margin: 10px 10px 10px 20px;
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.white};
`;
export const TextInfo = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.small};
  margin: 0px 0px 0px 20px;
  color: ${(props) => props.theme.main.colors.white};
`;

export const ImageAmbulance = styled.Image`
  padding: 40px;
  width: 10px;
  height: 10px;
  margin: 5px 10px 80px 20px;
`;

export const View = styled.View`
  align-items: center;
  flex-direction: row;
  margin: -80px -20px -10px 0px;
`;

export const Seta = styled.View`
  align-items: center;
  flex-direction: row;
  margin: -50px -10px 0px 275px;
`;

export const LocationIcon = styled.Image`
  padding: 25px;
  width: 10px;
  height: 10px;
`;

export const SetaIcon = styled.Image`
  padding: 20px;
  width: 10px;
  height: 10px;
`;

export const Informacoes = styled.View`
  border-radius: 10px;
  margin: 400px 0 0 0;
  height: 370px;
  width: 380px;
  border: solid 0.5px;
`;

export const BotaoAjuda = styled.TouchableOpacity`
  border-radius: 8px;
  margin: -100px 0 0 0;
  height: 100px;
  width: 341px;
  background-color: ${(props) => props.theme.main.colors.primary};
`;

export const ButtonContainer = styled.View`
  width: 90%;
`;

export const Quadrado = styled.View`
  height: 95px;
  width: 270px;
  margin: 2px 10px 10px 10px;
`;
