import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const HeaderContainer = styled.View`
  width: 100%;
  height: 100px;
  padding: 0 0 0 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.medium};
  font-size: ${(props) => props.theme.main.font.size.big};
  color: ${(props) => props.theme.main.colors.text};
`;

export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const HeaderIcon = styled(Feather).attrs((props) => ({
  name: 'x',
  size: 24,
  color: props.theme.main.colors.text,
}))``;

export const LogoutIcon = styled(Feather).attrs((props) => ({
  name: 'log-out',
  size: 24,
  color: props.theme.main.colors.red,
}))``;

export const FooterContainer = styled.View`
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 10px;
  align-items: flex-start;
  justify-content: center;
`;

export const LogoutButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const LogoutButtonText = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  font-size: ${(props) => props.theme.main.font.size.regular};
  font-weight: ${(props) => props.theme.main.font.weight.bold};
  color: ${(props) => props.theme.main.colors.red};
  padding-left: 10px;
`;
