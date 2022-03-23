import React from 'react';
import {Switch} from 'react-native';
import {useTheme} from '../themes/ThemeManagerProvider';
import {Container, Text} from './styles';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Switch value={theme.isDarkMode} onValueChange={theme.setIsDarkMode} />
    </Container>
  );
};

export default Home;
