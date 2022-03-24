import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home/Home';
import {useTheme} from '../themes/ThemeManagerProvider';
import {darkMode, lightMode} from '../themes/theme';
import Config from '../pages/Config/Config';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer theme={theme.isDarkMode ? darkMode : lightMode}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Config" component={Config} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
