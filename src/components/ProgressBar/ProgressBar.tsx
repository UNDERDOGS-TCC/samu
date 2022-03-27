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
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(step);
    }, 500);
  }, [step]);

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
      <LeftWhiteBall isActive={isActive >= 0}>
        <Ball isActive={isActive >= 0} />
      </LeftWhiteBall>
      <CenterWhiteBall isActive={isActive >= 1}>
        <Ball isActive={isActive >= 1} />
      </CenterWhiteBall>
      <RightWhiteBall isActive={isActive >= 2}>
        <Ball isActive={isActive >= 2} />
      </RightWhiteBall>
    </Container>
  );
};

export default ProgressBar;
