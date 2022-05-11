import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Container = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
})`
  padding: 20px;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const InputsContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

interface ButtonContainerProps {
  paddingBottom: number;
}

export const ButtonContainer = styled.View<ButtonContainerProps>`
  justify-content: flex-end;
  width: 100%;
  padding-bottom: ${(props) => props.paddingBottom}px;
`;
