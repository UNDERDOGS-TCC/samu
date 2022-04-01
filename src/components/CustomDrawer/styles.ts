import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const HeaderContainer = styled.View`
  width: 100%;
  height: 100px;
  padding: 20px;
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
  name: 'menu',
  size: 24,
  color: props.theme.main.colors.text,
}))``;
