import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  padding: 30px 50px;
  border-bottom-width: 0.5px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.border};
`;

interface BallProps {
  isActive: boolean;
  side: 'left' | 'middle' | 'right';
}

export const Ball = styled.View<BallProps>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.main.colors.lightblue
      : props.theme.main.colors.gray};
  ${(props) => {
    if (props.side === 'left') {
      return 'left: 10%';
    }

    if (props.side === 'right') {
      return 'right: 10%';
    }

    if (props.side === 'middle') {
      return 'align-self: center';
    }

    return '';
  }}
`;

export const MainLine = styled.View`
  height: 5px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Line = styled(Animated.View)`
  height: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.main.colors.lightblue};
  position: absolute;
  left: 0;
  top: 0;
`;
