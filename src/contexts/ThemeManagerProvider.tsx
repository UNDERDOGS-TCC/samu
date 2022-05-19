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
import {Appearance} from 'react-native';
import {darkMode, lightMode} from '../themes/theme';

const isDarkMode = false;

const ThemeContext = createContext({
  isDarkMode,
  setIsDarkMode: () => console.log(isDarkMode),
  darkMode,
  lightMode,
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

    if (!isDarkModeFromStorage) {
      setThemeState(Appearance.getColorScheme() === 'dark');
      return;
    }

    setThemeState(JSON.parse(isDarkModeFromStorage) as boolean);
  }, [getItem]);

  useEffect(() => {
    getIsDarkModeFromStorage();
  }, [getIsDarkModeFromStorage]);

  const returnValues = useMemo(
    () => ({
      isDarkMode: themeState,
      setIsDarkMode,
      darkMode,
      lightMode,
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
