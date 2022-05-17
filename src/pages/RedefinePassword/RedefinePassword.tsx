import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import {Alert, KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {
  ButtonContainer,
  Container,
  InputsContainer,
  ScrollContainer,
} from './styles';
import {redefinePassword} from '../../api/user';
import {useAuth} from '../../contexts/AuthProvider';
import Loader from '../../components/Loader/Loader';

const RedefinePassword: React.FC = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {user} = useAuth();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Redefinir senha',
      headerBackTitle: 'Perfil',
    });
  }, [navigation]);

  const handlePressSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await redefinePassword(user._id!, oldPassword, newPassword);
      if (!res.success) {
        setIsLoading(false);
        Alert.alert('Erro ao redefinir senha', res.message, [{text: 'OK'}]);
        return;
      }
      setIsLoading(false);
      Alert.alert('Sucesso', res.message, [{text: 'OK'}]);
      navigation.goBack();
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Erro ao redefinir senha', 'Tente novamente mais tarde', [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <Container>
      <Loader isActive={isLoading} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={
          useHeaderHeight() + (StatusBar.currentHeight || 0)
        }
      >
        <ScrollContainer keyboardShouldPersistTaps="handled">
          <InputsContainer>
            <Input
              title="Senha atual"
              placeholder="Digite sua senha atual"
              value={oldPassword}
              onChangeText={(text: string) => setOldPassword(text)}
              isPassword
            />
            <Input
              title="Nova senha"
              placeholder="Digite sua nova senha"
              value={newPassword}
              onChangeText={(text: string) => setNewPassword(text)}
              isPassword
            />
            <Input
              title="Confirmar a nova senha"
              placeholder="Confirme a sua nova senha"
              value={newPasswordConfirmation}
              onChangeText={(text: string) => setNewPasswordConfirmation(text)}
              isPassword
            />
          </InputsContainer>
          <ButtonContainer paddingBottom={insets.bottom}>
            <Button
              title="Redefinir senha"
              active={
                !!oldPassword &&
                !!newPassword &&
                newPassword === newPasswordConfirmation
              }
              onPress={handlePressSubmit}
            />
          </ButtonContainer>
        </ScrollContainer>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default RedefinePassword;
