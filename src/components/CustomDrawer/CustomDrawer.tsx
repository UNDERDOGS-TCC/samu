import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {HeaderButton, HeaderContainer, HeaderIcon, HeaderTitle} from './styles';

interface CustomDrawerProps extends DrawerContentComponentProps {}

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props}>
      <HeaderContainer>
        <HeaderTitle>Menu</HeaderTitle>
        <HeaderButton onPress={() => navigation.closeDrawer()}>
          <HeaderIcon />
        </HeaderButton>
      </HeaderContainer>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
