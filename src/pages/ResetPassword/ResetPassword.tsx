import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const ResetPassword: React.FC = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Redefinir senha',
    });
  }, [navigation]);

  return (
    <View>
      <Text>ResetPassword</Text>
    </View>
  );
};

export default ResetPassword;
