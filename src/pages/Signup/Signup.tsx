import React, {useState} from 'react';
import {Button} from 'react-native';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {Container, FormContainer} from './styles';

const Signup: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <Container>
      <ProgressBar step={step} steps={2} />
      <FormContainer>
        <Button title="Voltar" onPress={() => setStep(step - 1)} />
        <Button title="Avançar" onPress={() => setStep(step + 1)} />
      </FormContainer>
    </Container>
  );
};

export default Signup;
