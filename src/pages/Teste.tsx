import React, {useState} from 'react';
import {Button, View} from 'react-native';
import Loader from '../components/Loader/Loader';

const Teste: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOnPress = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Loader isActive={isActive} />
      <Button title="aaa" onPress={handleOnPress} />
    </View>
  );
};

export default Teste;
