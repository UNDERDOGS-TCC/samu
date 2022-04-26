import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View} from 'react-native';
import {
  FooterContainer,
  HeaderContainer,
  HeaderTitle,
  LogoutButton,
  LogoutButtonText,
  LogoutIcon,
} from './styles';
import {useAuth} from '../../contexts/AuthProvider';

interface CustomDrawerProps extends DrawerContentComponentProps {}

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  const {logout} = useAuth();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <HeaderContainer>
          <HeaderTitle>Menu</HeaderTitle>
        </HeaderContainer>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <FooterContainer>
        <LogoutButton onPress={logout}>
          <LogoutIcon />
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButton>
      </FooterContainer>
    </View>
  );
};

export default CustomDrawer;
