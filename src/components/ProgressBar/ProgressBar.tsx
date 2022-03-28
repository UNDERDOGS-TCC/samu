import React, {useEffect, useState} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
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
  action: 'back' | 'next' | undefined;
}

const ProgressBar: React.FC<ProgressBarProps> = ({step, steps, action}) => {
  const [width, setWidth] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const reactive = useSharedValue(-1000);

  const updateIsActive = () => {
    if (action === 'next') {
      setIsActive(step);
    }
  };

  const style = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(
          reactive.value,
          {
            duration: 500,
          },
          () => {
            runOnJS(updateIsActive)();
          },
        ),
      },
    ],
  }));

  useEffect(() => {
    if (action === 'back') {
      setIsActive(step);
    }
    reactive.value = -width + (width * step) / steps;
  }, [reactive, step, steps, width, action]);

  return (
    <Container>
      <MainLine
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;

          setWidth(newWidth);
        }}
      >
        <Line style={[style]} />
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
