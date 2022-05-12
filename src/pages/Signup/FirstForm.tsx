import React, {useRef} from 'react';
import {TextInput} from 'react-native';
import ChangeAvatarButton from '../../components/ChangeAvatarButton/ChangeAvatarButton';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {ImageContainer, PageContainer} from './styles';
import {FirstFormProps} from '../../interfaces/SignupForm';

const FirstForm: React.FC<FirstFormProps> = ({
  handlePressNext,
  paddingBottom,
  name,
  setName,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  setImageUri,
}) => {
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
        <ChangeAvatarButton sendImageUri={setImageUri} isEdit />
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
