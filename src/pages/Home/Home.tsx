import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import {Container, Text} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Signup"
        onPress={() => navigation.navigate('Signup' as never)}
      />
    </Container>
  );
};

export default Home;
