import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import ChangeAvatarButton from '../../components/ChangeAvatarButton/ChangeAvatarButton';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {ImageContainer, PageContainer} from './styles';
import SignupFormProps from '../../interfaces/SignupForm';

const FirstForm: React.FC<SignupFormProps> = ({
  handlePressNext,
  paddingBottom,
}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmationRef = useRef<TextInput>(null);

  return (
    <PageContainer
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      paddingBottom={paddingBottom}
      key="1"
    >
      <ImageContainer>
        <ChangeAvatarButton isEdit />
      </ImageContainer>
      <Input
        title="Nome"
        placeholder="Digite seu nome completo"
        isPassword={false}
        value={name}
        onChangeText={(text) => setName(text)}
        textContentType="name"
        onSubmitEditing={() => passwordRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <Input
        title="Senha"
        placeholder="Crie uma senha"
        isPassword
        value={password}
        onChangeText={(text) => setPassword(text)}
        textContentType="oneTimeCode"
        nextRef={passwordRef}
        onSubmitEditing={() => passwordConfirmationRef.current?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <Input
        title="Confirmar senha"
        placeholder="Confirme a sua senha"
        isPassword
        value={passwordConfirmation}
        onChangeText={(text) => setPasswordConfirmation(text)}
        textContentType="oneTimeCode"
        nextRef={passwordConfirmationRef}
      />
      <Button
        active={
          name !== '' && password !== '' && password === passwordConfirmation
        }
        onPress={handlePressNext}
        secondary
        title="Próximo"
      />
    </PageContainer>
  );
};

export default FirstForm;
