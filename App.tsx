import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes/Routes';
import ThemeManagerProvider from './src/themes/ThemeManagerProvider';

const App: React.FC = () => (
  <ThemeManagerProvider>
    <Routes />
  </ThemeManagerProvider>
);

export default App;
