import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
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
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [action, setAction] = useState<'back' | 'next' | undefined>();
  const pagerRef = useRef<PagerView>(null);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: 'Cadastro',
    });
  }, [navigation]);

  const handlePressBack = () => {
    setAction('back');
    setStep((lastValue) => {
      const newValue = lastValue - 1;
      pagerRef.current?.setPage(newValue);
      return newValue;
    });
  };

  const handlePressNext = () => {
    setAction('next');
    setStep((lastValue) => {
      const newValue = lastValue + 1;
      pagerRef.current?.setPage(newValue);
      return newValue;
    });
  };

  return (
    <Container>
      <ProgressBar step={step} steps={2} action={action} />

      <FormContainer ref={pagerRef} initialPage={0} scrollEnabled={false}>
        <PageContainer
          showsVerticalScrollIndicator={false}
          paddingBottom={insets.bottom}
          key="1"
        >
          <ImageContainer>
            <ChangeAvatarButton />
          </ImageContainer>
          <Input
            title="Nome"
            placeholder="Digite seu nome completo"
            isPassword={false}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            title="Senha"
            placeholder="Crie uma senha"
            isPassword
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            title="Confirmar senha"
            placeholder="Confirme a sua senha"
            isPassword
            value={passwordConfirmation}
            onChangeText={(text) => setPasswordConfirmation(text)}
          />
          <CustomButton
            active={
              name !== '' &&
              password !== '' &&
              password === passwordConfirmation
            }
            onPress={handlePressNext}
            secondary
            title="Próximo"
          />
        </PageContainer>

        <PageContainer
          showsVerticalScrollIndicator={false}
          paddingBottom={insets.bottom}
          key="2"
        >
          <CustomButton
            active
            onPress={handlePressNext}
            secondary
            title="Próximo"
          />
          <CustomButton
            active
            onPress={handlePressBack}
            danger
            title="Voltar"
          />
        </PageContainer>

        <PageContainer
          showsVerticalScrollIndicator={false}
          paddingBottom={insets.bottom}
          key="3"
        >
          <CustomButton
            active
            onPress={handlePressNext}
            secondary
            title="Criar Conta"
          />
          <CustomButton
            active
            onPress={handlePressBack}
            danger
            title="Voltar"
          />
        </PageContainer>
      </FormContainer>
    </Container>
  );
};

export default Signup;
