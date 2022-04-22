import styled from 'styled-components/native';

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
