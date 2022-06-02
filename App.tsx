import {GestureHandlerRootView} from 'react-native-gesture-handler';
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
import {useAssets} from 'expo-asset';
import Routes from './src/routes/Routes';
import ThemeManagerProvider from './src/contexts/ThemeManagerProvider';
import AuthProvider from './src/contexts/AuthProvider';

const App: React.FC = () => {
  const [isFontsLoaded] = useFonts({
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
  const [assets] = useAssets([
    require('./assets/carro-ambulancia.png'),
    require('./assets/chat.png'),
    require('./assets/formularioBranco.png'),
    require('./assets/location_icon.png'),
    require('./assets/logo.png'),
    require('./assets/saude.png'),
    require('./assets/seguranca.png'),
    require('./assets/seta.png'),
    require('./assets/traco.png'),
    require('./assets/GPS_blue.png'),
  ]);

  if (!isFontsLoaded || !assets) {
    return <AppLoading autoHideSplash={false} />;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeManagerProvider>
        <AuthProvider appIsReady={isFontsLoaded && !!assets}>
          <Routes />
        </AuthProvider>
      </ThemeManagerProvider>
    </GestureHandlerRootView>
  );
};

export default App;
