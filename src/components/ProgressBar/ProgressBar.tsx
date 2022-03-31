import React, {useEffect, useState} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {Container, MainLine, Line, Ball} from './styles';

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
      <Ball side="left" isActive={isActive >= 0} />
      <Ball side="middle" isActive={isActive >= 1} />
      <Ball side="right" isActive={isActive >= 2} />
    </Container>
  );
};

export default ProgressBar;
