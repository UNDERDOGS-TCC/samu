import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button} from 'react-native';
import {Container, Text} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home',
    });
  }, [navigation]);

  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Signup"
        onPress={() => navigation.navigate('Signup' as never)}
      />
      <Button
        title="Reset password"
        onPress={() => navigation.navigate('ResetPassword' as never)}
      />
    </Container>
  );
};

export default Home;
