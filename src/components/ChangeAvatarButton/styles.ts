import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.main.colors.lightgray};
`;

export const Avatar = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

export const AvatarEditOverlay = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffffff6a;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const EditIcon = styled(Feather).attrs((props) => ({
  name: 'camera',
  size: 64,
  color: props.theme.main.colors.text,
}))``;
