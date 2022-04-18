import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';
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

  const complementRef = useRef<TextInput>(null);
  const zipCodeRef = useRef<TextInput>(null);
  const stateRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);

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
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => complementRef.current?.focus()}
      />
      <Input
        title="Complemento"
        placeholder="Apto. 901"
        value={complement}
        onChangeText={(text) => setComplement(text)}
        textContentType="streetAddressLine2"
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => zipCodeRef.current?.focus()}
        nextRef={complementRef}
      />
      <DoubleInputContainer>
        <InputContainer>
          <Input
            title="Cep"
            placeholder="01234-567"
            value={zipCode}
            onChangeText={(_text, rawText) => setZipCode(rawText!)}
            textContentType="postalCode"
            keyboardType="numeric"
            mask="99999-999"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => stateRef.current?.focus()}
            nextRef={zipCodeRef}
          />
        </InputContainer>
        <InputContainer>
          <Input
            title="UF"
            placeholder="SP"
            value={state}
            onChangeText={(_text, rawText) => setState(rawText!)}
            textContentType="addressState"
            mask="AA"
            uppercase
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => cityRef.current?.focus()}
            nextRef={stateRef}
          />
        </InputContainer>
      </DoubleInputContainer>
      <Input
        title="Cidade"
        placeholder="São Paulo"
        value={city}
        onChangeText={(text) => setCity(text)}
        textContentType="addressCity"
        nextRef={cityRef}
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
