import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home/Home';
import Config from '../pages/Config/Config';
import {useTheme} from '../themes/ThemeManagerProvider';
import {darkMode, lightMode} from '../themes/theme';

const Drawer = createDrawerNavigator();

const Sidebar: React.FC = () => {
  const {isDarkMode} = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {
          fontFamily: isDarkMode
            ? darkMode.main.font.family.rubik.regular
            : lightMode.main.font.family.rubik.regular,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Config" component={Config} />
    </Drawer.Navigator>
  );
};

export default Sidebar;
