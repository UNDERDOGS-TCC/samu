import React, {useState} from 'react';
import {View, Button} from 'react-native';
import Loader from '../components/Loader/Loader';

const Teste: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Loader isActive />
      <Button title="aa" onPress={() => setActive(!active)} />
    </View>
  );
};

export default Teste;
