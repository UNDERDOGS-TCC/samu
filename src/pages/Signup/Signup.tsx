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
import {useAuth} from '../../contexts/AuthProvider';

const Signup: React.FC = () => {
  const {registerUser} = useAuth();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [action, setAction] = useState<'back' | 'next' | undefined>();
  const pagerRef = useRef<PagerView>(null);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: 'Cadastro',
      headerShadowVisible: false,
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
    const newUser = {
      name,
      password,
      passwordConfirmation,
      cpf,
      birthday,
      cellphone,
      email,
      address,
      complement,
      cep: zipCode,
      state,
      city,
      imageUri,
    };
    registerUser(newUser);
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
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
            passwordConfirmation={passwordConfirmation}
            setPasswordConfirmation={setPasswordConfirmation}
            setImageUri={setImageUri}
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
            cpf={cpf}
            setCpf={setCpf}
            birthday={birthday}
            setBirthday={setBirthday}
            cellphone={cellphone}
            setCellphone={setCellphone}
            email={email}
            setEmail={setEmail}
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
            address={address}
            setAddress={setAddress}
            complement={complement}
            setComplement={setComplement}
            zipCode={zipCode}
            setZipCode={setZipCode}
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
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
