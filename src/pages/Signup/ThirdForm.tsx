import React from 'react';
import Button from '../../components/Button/Button';
import SignupFormProps from '../../interfaces/SignupForm';
import {PageContainer} from './styles';

const ThirdForm: React.FC<SignupFormProps> = ({
  paddingBottom,
  handlePressNext,
  handlePressBack,
}) => {
  console.log('aa');

  return (
    <PageContainer
      showsVerticalScrollIndicator={false}
      paddingBottom={paddingBottom}
      key="3"
    >
      <Button active onPress={handlePressNext} secondary title="Criar Conta" />
      <Button active onPress={handlePressBack!} danger title="Voltar" />
    </PageContainer>
  );
};

export default ThirdForm;
