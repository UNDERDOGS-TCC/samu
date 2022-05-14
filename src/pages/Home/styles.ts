import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Feather} from '@expo/vector-icons';
import {FlatList, FlatListProps} from 'react-native';
import {OtherServicesListInterface} from '../../utils/otherServicesList';

export const Container = styled(SafeAreaView)`
  flex: 1;
  margin: 10px 20px;
`;

export const DrawerIconContainer = styled.View`
  width: 100%;
`;

export const ClosedDrawerIcon = styled(Feather).attrs({
  name: 'menu',
  size: 24,
})``;

export const UserContainer = styled.View`
  width: 100%;
  margin: 20px 0 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserMessageContainer = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const UserMessage = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const UserMessageTitle = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.small};
  color: ${(props) => props.theme.main.colors.text};
  font-family: ${(props) => props.theme.main.font.family.rubik.light};
`;

export const UserMessageSubtitle = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.verybig};
  color: ${(props) => props.theme.main.colors.text};
  font-family: ${(props) => props.theme.main.font.family.rubik.bold};
`;

export const UserPictureContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const UserPicture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const SamuButtonContainer = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const SamuButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: 90%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.main.colors.primary};
  flex-direction: row;
`;

export const LeftButtonContainer = styled.View`
  width: 50%;
  height: 100%;
  padding: 10% 0;
  justify-content: center;
  align-items: center;
`;

export const LeftButtonTitle = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.verybig};
  color: ${(props) => props.theme.main.colors.white};
  font-family: ${(props) => props.theme.main.font.family.rubik.bold};
`;

export const LeftButtonDescription = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.regular};
  color: ${(props) => props.theme.main.colors.white};
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  text-align: center;
`;

export const RightButtonContainer = styled.View`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SamuImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const OtherServicesContainer = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const OtherServicesTitle = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.big};
  color: ${(props) => props.theme.main.colors.text};
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
`;

export const OtherServicesListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: -10px -20px;
`;

export const OtherServicesList = styled(
  FlatList as new (
    props: FlatListProps<OtherServicesListInterface>,
  ) => FlatList<OtherServicesListInterface>,
).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    marginVertical: 10,
  },
})``;

interface OtherServicesListItemProps {
  marginLeft?: number;
  marginRight?: number;
}

export const OtherServicesListItem = styled.View<OtherServicesListItemProps>`
  height: 80%;
  width: 150px;
  margin-right: ${(props) => props.marginRight || 10}px;
  margin-left: ${(props) => props.marginLeft || 0}px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  background-color: ${(props) => props.theme.main.colors.secondary};
`;

export const OtherServicesListImage = styled.Image`
  height: 50%;
  width: 100%;
`;

export const OtherServicesListItemText = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.regular};
  color: ${(props) => props.theme.main.colors.white};
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  text-align: center;
`;
