import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  padding: 10px 20px;
`;

export const ProfilePicContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const UserInfosContainer = styled.View`
  flex: 1;
  padding-bottom: 30px;
`;

export const BigInfo = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.big};
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  color: ${(props) => props.theme.main.colors.text};
  padding: 20px 0 10px;
`;

export const UserInfos = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.regular};
  font-family: ${(props) => props.theme.main.font.family.rubik.light};
  color: ${(props) => props.theme.main.colors.text};
  padding-bottom: 10px;
`;

export const HeaderRightContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const HeaderRightIcon = styled(Feather).attrs((props) => ({
  name: 'edit-2',
  size: 24,
  color: props.theme.main.colors.text,
}))``;
