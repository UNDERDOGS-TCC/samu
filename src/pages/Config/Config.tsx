import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {Container, OptionContainer, OptionText} from './styles';
import {useTheme} from '../../themes/ThemeManagerProvider';

const Config: React.FC = () => {
  const navigation = useNavigation();
  const {isDarkMode, setIsDarkMode} = useTheme();
  const {setItem} = useAsyncStorage('@isDarkMode');

  useEffect(() => {
    navigation.setOptions({
      title: 'Configurações',
    });
  }, [navigation]);

  const storeIsDarkMode = async () => {
    try {
      await setItem(JSON.stringify(!isDarkMode));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSwitchOnValueChange = async () => {
    await storeIsDarkMode();
    setIsDarkMode();
  };

  return (
    <Container>
      <OptionContainer>
        <OptionText>Dark Mode</OptionText>
        <Switch
          thumbColor={isDarkMode ? '#FFF' : '#323232'}
          trackColor={{false: '#646464', true: '#646464'}}
          value={isDarkMode}
          onValueChange={handleSwitchOnValueChange}
        />
      </OptionContainer>
    </Container>
  );
};

export default Config;
