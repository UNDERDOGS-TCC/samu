import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  padding: 10px 50px;
`;

interface BallProps {
  isActive: boolean;
}

export const Ball = styled.View<BallProps>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.main.colors.darkblue
      : props.theme.main.colors.background};
`;

export const LeftWhiteBall = styled.View`
  left: 10%;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #06992b;
`;

export const CenterWhiteBall = styled.View`
  position: absolute;
  align-self: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: grey;
`;

export const RightWhiteBall = styled.View`
  right: 10%;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: grey;
`;

export const MainLine = styled.View`
  height: 5px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Line = styled(Animated.View)`
  height: 5px;
  width: 100%;
  background-color: #06992b;
  position: absolute;
  left: 0;
  top: 0;
`;
