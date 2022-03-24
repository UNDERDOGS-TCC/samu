import {StatusBar} from 'expo-status-bar';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {darkMode, lightMode} from './theme';

const isDarkMode = false;

const ThemeContext = createContext({
  isDarkMode,
  setIsDarkMode: () => console.log(isDarkMode),
});

export const useTheme = () => useContext(ThemeContext);

const ThemeManagerProvider: React.FC = ({children}) => {
  const [themeState, setThemeState] = useState<boolean>(isDarkMode);
  const setIsDarkMode = useCallback(() => {
    setThemeState(!themeState);
  }, [themeState]);
  const {getItem} = useAsyncStorage('@isDarkMode');

  const getIsDarkModeFromStorage = useCallback(async () => {
    const isDarkModeFromStorage = await getItem();
    setThemeState(JSON.parse(isDarkModeFromStorage || 'false') as boolean);
  }, [getItem]);

  useEffect(() => {
    getIsDarkModeFromStorage();
  }, [getIsDarkModeFromStorage]);

  const returnValues = useMemo(
    () => ({
      isDarkMode: themeState,
      setIsDarkMode,
    }),
    [themeState, setIsDarkMode],
  );

  return (
    <ThemeContext.Provider value={returnValues}>
      <ThemeProvider theme={themeState ? darkMode : lightMode}>
        <StatusBar style={themeState ? 'light' : 'dark'} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeManagerProvider;
