import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '../themes/ThemeManagerProvider';
import {darkMode, lightMode} from '../themes/theme';
import Config from '../pages/Config/Config';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Mapa from '../pages/Mapa/Mapa';
import Sidebar from './Sidebar';
import ResetPassword from '../pages/ResetPassword/ResetPassword';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const {isDarkMode} = useTheme();

  return (
    <NavigationContainer theme={isDarkMode ? darkMode : lightMode}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: isDarkMode
              ? darkMode.main.font.family.rubik.medium
              : lightMode.main.font.family.rubik.medium,
            fontSize: isDarkMode
              ? darkMode.main.font.size.header
              : lightMode.main.font.size.header,
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Config" component={Config} />
        <Stack.Screen
          name="Sidebar"
          component={Sidebar}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Mapa" component={Mapa} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
