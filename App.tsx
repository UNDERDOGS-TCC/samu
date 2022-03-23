import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import Routes from './src/routes/Routes';
import {lightMode, darkMode} from './src/themes/theme';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // GET THEME FROM STORAGE
    setIsDarkTheme(false);
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
