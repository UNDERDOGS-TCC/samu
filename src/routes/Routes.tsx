import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '../themes/ThemeManagerProvider';
import {darkMode, lightMode} from '../themes/theme';
import Signup from '../pages/Signup/Signup';
import Sidebar from './Sidebar';

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
        <Stack.Screen
          name="Sidebar"
          component={Sidebar}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
