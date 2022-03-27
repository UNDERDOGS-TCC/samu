import React from 'react';
import {Text} from 'react-native';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {Container, FormContainer} from './styles';

const Signup: React.FC = () => {
  console.log('aaa');

  return (
    <Container>
      <ProgressBar step={0} steps={2} />
      <FormContainer>
        <Text>Signup</Text>
      </FormContainer>
    </Container>
  );
};

export default Signup;
