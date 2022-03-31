import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {PageContainer} from './styles';
import SignupFormProps from '../../interfaces/SignupForm';

const SecondForm: React.FC<SignupFormProps> = ({
  paddingBottom,
  handlePressNext,
  handlePressBack,
}) => {
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <PageContainer
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      paddingBottom={paddingBottom}
      key="2"
    >
      <Input
        title="CPF"
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={(_text, rawText) => setCpf(rawText!)}
        keyboardType="numeric"
        mask="999.999.999-99"
      />
      <Input
        title="Data de nascimento"
        placeholder="DD/MM/AAAA"
        value={birthday}
        onChangeText={(_text, rawText) => setBirthday(rawText!)}
        textContentType="none"
        keyboardType="numeric"
        mask="99/99/9999"
      />
      <Input
        title="Celular"
        placeholder="Digite DDD + Celular"
        value={cellphone}
        onChangeText={(_text, rawText) => setCellphone(rawText!)}
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
        mask="(99) 99999-9999"
      />
      <Input
        title="E-mail"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Button
        active={
          cpf !== '' && birthday !== '' && cellphone !== '' && email !== ''
        }
        onPress={handlePressNext}
        secondary
        title="Próximo"
      />
      <Button active onPress={handlePressBack!} danger title="Voltar" />
    </PageContainer>
  );
};

export default SecondForm;
