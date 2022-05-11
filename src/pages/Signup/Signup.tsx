import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAvoidingView, Platform} from 'react-native';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {Container, FormContainer} from './styles';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';

const Signup: React.FC = () => {
  const insets = useSafeAreaInsets();
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

  const handleCreateAccount = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <Container>
      <ProgressBar step={step} steps={2} action={action} />

      <FormContainer ref={pagerRef} initialPage={0} scrollEnabled={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={120}
        >
          <FirstForm
            paddingBottom={insets.bottom}
            handlePressNext={handlePressNext}
            key="1"
          />
        </KeyboardAvoidingView>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={120}
        >
          <SecondForm
            paddingBottom={insets.bottom}
            handlePressNext={handlePressNext}
            handlePressBack={handlePressBack}
            key="2"
          />
        </KeyboardAvoidingView>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={120}
        >
          <ThirdForm
            paddingBottom={insets.bottom}
            handlePressNext={handleCreateAccount}
            handlePressBack={handlePressBack}
            key="3"
          />
        </KeyboardAvoidingView>
      </FormContainer>
    </Container>
  );
};

export default Signup;
