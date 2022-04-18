import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import MapInfos from '../../components/MapInfos/MapInfos';
import {View} from './styles';

const Mapa: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View>
      <MapInfos />
    </View>
  );
};

export default Mapa;
