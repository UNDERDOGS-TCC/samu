import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '../contexts/ThemeManagerProvider';
import {darkMode, lightMode} from '../themes/theme';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Mapa from '../pages/Mapa/Mapa';
import Sidebar from './Sidebar';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import {useAuth} from '../contexts/AuthProvider';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const {isDarkMode} = useTheme();
  const {user} = useAuth();

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
        {!user ? (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Sidebar"
              component={Sidebar}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Mapa" component={Mapa} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
