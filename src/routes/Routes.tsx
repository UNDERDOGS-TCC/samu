import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home/Home';
import {useTheme} from '../themes/ThemeManagerProvider';
import {darkMode, lightMode} from '../themes/theme';
import Config from '../pages/Config/Config';
import Signup from '../pages/Signup/Signup';

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Config" component={Config} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
