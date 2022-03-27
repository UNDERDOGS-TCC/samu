import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {
  Container,
  MainLine,
  Line,
  RightWhiteBall,
  Ball,
  LeftWhiteBall,
  CenterWhiteBall,
} from './styles';

interface ProgressBarProps {
  step: number;
  steps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({step, steps}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [animatedValue, reactive]);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [reactive, step, steps, width]);

  return (
    <Container>
      <MainLine
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;

          setWidth(newWidth);
        }}
      >
        <Line style={{transform: [{translateX: animatedValue}]}} />
      </MainLine>
      <LeftWhiteBall>
        <Ball isActive />
      </LeftWhiteBall>
      <CenterWhiteBall>
        <Ball isActive={false} />
      </CenterWhiteBall>
      <RightWhiteBall>
        <Ball isActive={false} />
      </RightWhiteBall>
    </Container>
  );
};

export default ProgressBar;
