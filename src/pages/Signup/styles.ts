import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const FormContainer = styled(Animated.View)`
  flex: 1;
  align-items: center;
`;

export const ImageContainer = styled.View``;
