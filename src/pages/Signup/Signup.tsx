import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {
  LightSpeedInLeft,
  LightSpeedInRight,
  LightSpeedOutLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {Container, FormContainer} from './styles';

const Signup: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isInit, setIsInit] = useState(true);
  const [action, setAction] = useState<'back' | 'next' | undefined>();

  const handleFirstFormAnimation = () => {
    if (isInit) {
      setIsInit(false);
      return undefined;
    }
    return LightSpeedInLeft;
  };

  const handlePressBack = () => {
    setAction('back');
    setStep((lastValue) => lastValue - 1);
  };

  const handlePressNext = () => {
    setAction('next');
    setStep((lastValue) => lastValue + 1);
  };

  return (
    <Container>
      <ProgressBar step={step} steps={2} action={action} />

      {step === 0 && (
        <FormContainer
          entering={handleFirstFormAnimation()}
          exiting={LightSpeedOutLeft}
        >
          <Button title="first" onPress={() => console.log('aa')} />
        </FormContainer>
      )}

      {step === 1 && (
        <FormContainer entering={LightSpeedInLeft} exiting={LightSpeedOutLeft}>
          <Button title="second" onPress={() => console.log('aa')} />
        </FormContainer>
      )}

      {step === 2 && (
        <FormContainer
          entering={LightSpeedInRight}
          exiting={LightSpeedOutRight}
        >
          <Button title="third" onPress={() => console.log('aa')} />
        </FormContainer>
      )}

      <Button title="Voltar" onPress={handlePressBack} />
      <Button title="Avançar" onPress={handlePressNext} />
    </Container>
  );
};

export default Signup;
