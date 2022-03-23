import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {darkMode, lightMode} from './theme';

const isDarkMode = false; // TODO: GET FROM STORAGE

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
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeManagerProvider;
