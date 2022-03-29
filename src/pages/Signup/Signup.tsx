import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {
  Container,
  FormContainer,
  ImageContainer,
  PageContainer,
} from './styles';
import ChangeAvatarButton from '../../components/ChangeAvatarButton/ChangeAvatarButton';
import Input from '../../components/Input/Input';

const Signup: React.FC = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [action, setAction] = useState<'back' | 'next' | undefined>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Cadastro',
    });
  }, [navigation]);

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

      <FormContainer initialPage={0} scrollEnabled={false}>
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
        </PageContainer>

        <PageContainer key="2">
          <Text>Pagina 2</Text>
        </PageContainer>

        <PageContainer key="3">
          <Text>Pagina 3</Text>
        </PageContainer>
      </FormContainer>

      <Button title="Voltar" onPress={handlePressBack} />
      <Button title="Avançar" onPress={handlePressNext} />
    </Container>
  );
};

export default Signup;
