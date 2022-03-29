import React from 'react';
import {Container, Title} from './styles';

interface ButtonProps {
  title: string;
  secondary?: boolean;
  danger?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({title, secondary, danger, onPress}) => {
  console.log('aa');

  return (
    <Container
      onPress={onPress}
      activeOpacity={0.7}
      secondary={secondary}
      danger={danger}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
