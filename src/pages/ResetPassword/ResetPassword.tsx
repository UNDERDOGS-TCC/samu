import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, TextInput} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {resetPassword} from '../../api/user';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Loader from '../../components/Loader/Loader';
import {ButtonContainer, Container, InputsContainer} from './styles';

const ResetPassword: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const birthdayRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Redefinir senha',
    });
  }, [navigation]);

  const handleSubmitButton = async () => {
    setIsLoading(true);
    try {
      const response = await resetPassword(cpf, email, birthday);
      if (!response.success) {
        setIsLoading(false);
        Alert.alert('Ocorreu um erro', response.message, [{text: 'OK'}]);
        return;
      }
      setIsLoading(false);
      Alert.alert('Sucesso', response.message, [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro', 'Tente novamente mais tarde', [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <Container extraScrollHeight={20}>
      <Loader isActive={isLoading} />
      <InputsContainer>
        <Input
          title="CPF"
          placeholder="123.456.789-00"
          value={cpf}
          onChangeText={(_text, rawText) => setCpf(rawText!)}
          mask="999.999.999-99"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => birthdayRef.current?.focus()}
          blurOnSubmit={false}
        />
        <Input
          title="Data de nascimento"
          placeholder="DD/MM/AAAA"
          value={birthday}
          onChangeText={(_text, rawText) => setBirthday(rawText!)}
          mask="99/99/9999"
          keyboardType="numeric"
          returnKeyType="next"
          nextRef={birthdayRef}
          onSubmitEditing={() => emailRef.current?.focus()}
          blurOnSubmit={false}
        />
        <Input
          title="Email"
          placeholder="Digite o seu email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          nextRef={emailRef}
        />
      </InputsContainer>
      <ButtonContainer paddingBottom={insets.bottom}>
        <Button
          title="Redefinir senha"
          active={cpf !== '' && birthday !== '' && email !== ''}
          onPress={handleSubmitButton}
          secondary
        />
      </ButtonContainer>
    </Container>
  );
};

export default ResetPassword;
