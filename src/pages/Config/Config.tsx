import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native';
import {Container, OptionContainer, OptionText} from './styles';
import {useTheme} from '../../themes/ThemeManagerProvider';

const Config: React.FC = () => {
  const navigation = useNavigation();
  const {isDarkMode, setIsDarkMode} = useTheme();

  useEffect(() => {
    navigation.setOptions({
      title: 'Configurações',
    });
  }, [navigation]);

  return (
    <Container>
      <OptionContainer>
        <OptionText>Dark Mode</OptionText>
        <Switch
          thumbColor={isDarkMode ? '#FFF' : '#323232'}
          trackColor={{false: '#646464', true: '#646464'}}
          value={isDarkMode}
          onValueChange={() => setIsDarkMode()}
        />
      </OptionContainer>
    </Container>
  );
};

export default Config;
