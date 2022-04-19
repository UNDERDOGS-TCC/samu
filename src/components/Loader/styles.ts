import AnimatedLottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.Modal.attrs({
  transparent: true,
  animationType: 'fade',
})``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.main.colors.transparent};
`;

export const LoaderContainer = styled.View`
  width: 80%;
  height: 30%;
  background-color: ${(props) => props.theme.main.colors.background};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const LottieView = styled(AnimatedLottieView)`
  width: 80%;
`;
