import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons';
import {View} from 'react-native';
import Home from '../pages/Home/Home';
import Config from '../pages/Config/Config';
import {useTheme} from '../themes/ThemeManagerProvider';
import {darkMode, lightMode} from '../themes/theme';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import Profile from '../pages/Profile/Profile';
import Teste from '../pages/Teste';

const Drawer = createDrawerNavigator();

const Sidebar: React.FC = () => {
  const {isDarkMode} = useTheme();

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({
        navigation,
      }: {
        navigation: {openDrawer: () => void};
      }) => ({
        drawerLabelStyle: {
          fontFamily: isDarkMode
            ? darkMode.main.font.family.rubik.regular
            : lightMode.main.font.family.rubik.regular,
          fontSize: isDarkMode
            ? darkMode.main.font.size.drawer
            : lightMode.main.font.size.drawer,
          marginLeft: -20,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: isDarkMode
            ? darkMode.main.font.family.rubik.medium
            : lightMode.main.font.family.rubik.medium,
          fontSize: isDarkMode
            ? darkMode.main.font.size.header
            : lightMode.main.font.size.header,
        },
        headerTintColor: isDarkMode
          ? darkMode.main.colors.text
          : lightMode.main.colors.text,
        headerLeft: (data) => (
          <View style={{paddingLeft: 20}}>
            <Feather
              onPress={() => navigation.openDrawer()}
              name="menu"
              size={24}
              color={data.tintColor}
            />
          </View>
        ),
      })}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={Config}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Teste"
        component={Teste}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Sidebar;
