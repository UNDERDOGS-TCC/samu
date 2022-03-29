import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {
  Container,
  FormContainer,
  ImageContainer,
  PageContainer,
} from './styles';
import ChangeAvatarButton from '../../components/ChangeAvatarButton/ChangeAvatarButton';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';

const Signup: React.FC = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [action, setAction] = useState<'back' | 'next' | undefined>();
  const pagerRef = useRef<PagerView>(null);

  useEffect(() => {
    navigation.setOptions({
      title: 'Cadastro',
    });
  }, [navigation]);

  const handlePressBack = () => {
    setAction('back');
    setStep((lastValue) => {
      const newValue = lastValue - 1;
      pagerRef?.current?.setPage(newValue);
      return newValue;
    });
  };

  const handlePressNext = () => {
    setAction('next');
    setStep((lastValue) => {
      const newValue = lastValue + 1;
      pagerRef?.current?.setPage(newValue);
      return newValue;
    });
  };

  return (
    <Container>
      <ProgressBar step={step} steps={2} action={action} />

      <FormContainer ref={pagerRef} initialPage={0} scrollEnabled={false}>
        <PageContainer key="1">
          <ImageContainer>
            <ChangeAvatarButton />
          </ImageContainer>
          <Input
            title="Nome"
            placeholder="Digite seu nome completo"
            isPassword={false}
          />
          <Input title="Senha" placeholder="Crie uma senha" isPassword />
          <Input
            title="Confirmar senha"
            placeholder="Confirme a sua senha"
            isPassword
          />
          <CustomButton onPress={handlePressNext} secondary title="Próximo" />
          <CustomButton onPress={handlePressBack} danger title="Voltar" />
        </PageContainer>

        <PageContainer key="2">
          <CustomButton onPress={handlePressNext} secondary title="Próximo" />
          <CustomButton onPress={handlePressBack} danger title="Voltar" />
        </PageContainer>

        <PageContainer key="3">
          <CustomButton
            onPress={handlePressNext}
            secondary
            title="Criar Conta"
          />
          <CustomButton onPress={handlePressBack} danger title="Voltar" />
        </PageContainer>
      </FormContainer>
    </Container>
  );
};

export default Signup;
