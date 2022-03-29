import React from 'react';
import {Container, Title, TextInput} from './styles';

interface InputProps {
  title: string;
  isPassword: boolean;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({isPassword, title, placeholder}) => {
  console.log('aa');

  return (
    <Container>
      <Title>{title}</Title>
      <TextInput secureTextEntry={isPassword} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
