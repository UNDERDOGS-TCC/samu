import React from 'react';
import {Container, Title} from './styles';

interface ButtonProps {
  title: string;
  secondary?: boolean;
  danger?: boolean;
  active: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  secondary,
  danger,
  onPress,
  active,
}) => (
  <Container
    active={active}
    disabled={!active}
    onPress={onPress}
    activeOpacity={0.7}
    secondary={secondary}
    danger={danger}
  >
    <Title>{title}</Title>
  </Container>
);

export default Button;
