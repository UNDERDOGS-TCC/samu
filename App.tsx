import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes';
import ThemeManagerProvider from './src/themes/ThemeManagerProvider';

const App: React.FC = () => (
  <NavigationContainer>
    <ThemeManagerProvider>
      <Routes />
    </ThemeManagerProvider>
  </NavigationContainer>
);

export default App;
