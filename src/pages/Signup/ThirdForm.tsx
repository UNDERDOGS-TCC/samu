import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import SignupFormProps from '../../interfaces/SignupForm';
import {DoubleInputContainer, InputContainer, PageContainer} from './styles';

const ThirdForm: React.FC<SignupFormProps> = ({
  paddingBottom,
  handlePressNext,
  handlePressBack,
}) => {
  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <PageContainer
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      paddingBottom={paddingBottom}
      key="3"
    >
      <Input
        title="Endereço"
        placeholder="Avenida Paulista, Nº 23"
        value={address}
        onChangeText={(text) => setAddress(text)}
        textContentType="streetAddressLine1"
      />
      <Input
        title="Complemento"
        placeholder="Apto. 901"
        value={complement}
        onChangeText={(text) => setComplement(text)}
        textContentType="streetAddressLine2"
      />
      <DoubleInputContainer>
        <InputContainer>
          <Input
            title="Cep"
            placeholder="01234-567"
            value={zipCode}
            onChangeText={(text) => setZipCode(text)}
            textContentType="postalCode"
            keyboardType="numeric"
          />
        </InputContainer>
        <InputContainer>
          <Input
            title="UF"
            placeholder="SP"
            value={state}
            onChangeText={(text) => setState(text)}
            textContentType="addressState"
          />
        </InputContainer>
      </DoubleInputContainer>
      <Input
        title="Cidade"
        placeholder="São Paulo"
        value={city}
        onChangeText={(text) => setCity(text)}
        textContentType="addressCity"
      />
      <Button
        active={
          address !== '' &&
          complement !== '' &&
          zipCode !== '' &&
          state !== '' &&
          city !== ''
        }
        secondary
        onPress={handlePressNext}
        title="Criar Conta"
      />
      <Button active onPress={handlePressBack!} danger title="Voltar" />
    </PageContainer>
  );
};

export default ThirdForm;
