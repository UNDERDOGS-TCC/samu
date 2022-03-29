import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';
import {Container, Title, TextInput, InputContainer} from './styles';
import {useTheme} from '../../themes/ThemeManagerProvider';
import {darkMode, lightMode} from '../../themes/theme';

interface InputProps {
  title: string;
  isPassword?: boolean;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | undefined;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  returnKeyType?: 'done' | 'next';
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  isPassword,
  title,
  placeholder,
  value,
  onChangeText,
  textContentType,
  keyboardType,
  returnKeyType,
  maxLength,
}) => {
  const {isDarkMode} = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setShowPassword(isPassword || false);
  }, [isPassword]);

  return (
    <Container>
      <Title>{title}</Title>
      <InputContainer>
        <TextInput
          value={value}
          onChangeText={(text) => onChangeText(text)}
          secureTextEntry={showPassword}
          textContentType={textContentType}
          placeholder={placeholder}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
        />
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
