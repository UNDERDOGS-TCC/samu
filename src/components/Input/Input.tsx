import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';
import {Container, Title, TextInput, InputContainer} from './styles';
import {useTheme} from '../../themes/ThemeManagerProvider';
import {darkMode, lightMode} from '../../themes/theme';

interface InputProps {
  title: string;
  isPassword: boolean;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({isPassword, title, placeholder}) => {
  const {isDarkMode} = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Title>{title}</Title>
      <InputContainer>
        <TextInput secureTextEntry={!showPassword} placeholder={placeholder} />
        {isPassword && !showPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name="eye"
              size={24}
              color={
                isDarkMode
                  ? darkMode.main.colors.text
                  : lightMode.main.colors.text
              }
            />
          </TouchableOpacity>
        )}
        {isPassword && showPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name="eye-off"
              size={24}
              color={
                isDarkMode
                  ? darkMode.main.colors.text
                  : lightMode.main.colors.text
              }
            />
          </TouchableOpacity>
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;
