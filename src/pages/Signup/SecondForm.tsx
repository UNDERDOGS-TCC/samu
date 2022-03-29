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
        onChangeText={(text) => setCpf(text)}
        keyboardType="numeric"
      />
      <Input
        title="Data de nascimento"
        placeholder="DD/MM/AAAA"
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
        textContentType="none"
        keyboardType="numeric"
      />
      <Input
        title="Celular"
        placeholder="Digite DDD + Celular"
        value={cellphone}
        onChangeText={(text) => setCellphone(text)}
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
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
