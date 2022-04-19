import 'react-native-gesture-handler';
import React from 'react';
import {
  useFonts,
  Rubik_300Light,
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_500Medium,
  Rubik_500Medium_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_900Black,
  Rubik_900Black_Italic,
} from '@expo-google-fonts/rubik';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes/Routes';
import ThemeManagerProvider from './src/contexts/ThemeManagerProvider';
import AuthProvider from './src/contexts/AuthProvider';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_300Light_Italic,
    Rubik_400Regular,
    Rubik_400Regular_Italic,
    Rubik_500Medium,
    Rubik_500Medium_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic,
    Rubik_900Black,
    Rubik_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeManagerProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeManagerProvider>
  );
};

export default App;
