import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: white;
  padding: 0 10px;
`;

export const GrayBarContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 15px;
`;

export const GrayBar = styled.Image`
  width: 20%;
  height: 100%;
`;

export const InfosContainer = styled.View`
  height: 50%;
  width: 100%;
`;

export const TopInfosContainer = styled.View`
  height: 50%;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TopInfosLeftContainer = styled.View`
  height: 100%;
  width: 50%;
  padding-left: 10px;
  align-items: flex-start;
  justify-content: center;
`;

export const TopInfosLeftText = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.regular};
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const TopInfosRightContainer = styled.View`
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: flex-end;
`;

export const SamuImage = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 50%;
  height: 100%;
`;

export const BottomInfosContainer = styled.View`
  height: 50%;
  width: 100%;
  flex-direction: row;
`;

export const BottomInfosLeftContainer = styled.View`
  height: 100%;
  width: 50%;
  flex-direction: row;
`;

export const BottomInfosLeftIconContainer = styled.View`
  height: 100%;
  width: 25%;
`;

export const BottomInfosLeftIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;

export const BottomInfosLeftInfos = styled.View`
  height: 100%;
  width: 75%;
  justify-content: center;
  align-items: flex-start;
`;

export const BottomInfosLeftText = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.small};
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;

export const BottomInfosRightContainer = styled.View`
  height: 100%;
  width: 50%;
  padding-right: 5px;
  justify-content: center;
  align-items: flex-end;
`;

export const BottomInfosRightText = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.regular};
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.text};
`;
