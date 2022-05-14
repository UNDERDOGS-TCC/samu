import {useNavigation} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform, StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import ChangeAvatarButton from '../../components/ChangeAvatarButton/ChangeAvatarButton';
import Input from '../../components/Input/Input';
import {useAuth} from '../../contexts/AuthProvider';
import {
  Container,
  ProfilePicContainer,
  ScrollView,
  UserInfosContainer,
  UserInfos,
  BigInfo,
  HeaderRightContainer,
  HeaderRightIcon,
} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const {user, updateUser} = useAuth();
  const insets = useSafeAreaInsets();

  const [imageUri, setImageUri] = useState(user?.imageUri);
  const [email, setEmail] = useState(user?.email);
  const [cellphone, setCellphone] = useState(user?.cellphone);
  const [address, setAddress] = useState(user?.address);
  const [complement, setComplement] = useState(user?.complement);
  const [cep, setCep] = useState(user?.cep);
  const [state, setState] = useState(user?.state);
  const [city, setCity] = useState(user?.city);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (!isEditing) {
          return (
            <HeaderRightContainer onPress={() => setIsEditing(true)}>
              <HeaderRightIcon />
            </HeaderRightContainer>
          );
        }
        return <View />;
      },
    });
  }, [navigation, isEditing]);

  const getImageUri = (uri: string) => {
    setImageUri(uri);
  };

  const handlePressSave = async () => {
    const newUser = user;

    newUser.email = email;
    newUser.cellphone = cellphone;
    newUser.address = address;
    newUser.complement = complement;
    newUser.cep = cep;
    newUser.state = state;
    newUser.city = city;
    newUser.imageUri = imageUri;

    await updateUser(newUser);
    setIsEditing(false);
  };

  const handlePressCancel = () => {
    setEmail(user?.email);
    setCellphone(user?.cellphone);
    setAddress(user?.address);
    setComplement(user?.complement);
    setCep(user?.cep);
    setState(user?.state);
    setCity(user?.city);
    setImageUri(user?.imageUri);
    setIsEditing(false);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={
          useHeaderHeight() + (StatusBar.currentHeight || 0)
        }
      >
        <ScrollView contentContainerStyle={{paddingBottom: insets.bottom}}>
          <ProfilePicContainer>
            <ChangeAvatarButton
              isEdit={isEditing}
              image={imageUri}
              sendImageUri={getImageUri}
            />
          </ProfilePicContainer>
          <UserInfosContainer>
            <BigInfo>{user?.name}</BigInfo>
            {isEditing ? (
              <>
                <Input
                  title="Email"
                  placeholder="joazinho@gmail.com"
                  value={email}
                  onChangeText={(text: string) => setEmail(text)}
                />
                <Input
                  title="Celular"
                  placeholder="11912345678"
                  value={cellphone}
                  onChangeText={(text: string) => setCellphone(text)}
                />
              </>
            ) : (
              <>
                <UserInfos>
                  Email:&nbsp;
                  {user?.email}
                </UserInfos>
                <UserInfos>
                  Cel.:&nbsp;
                  {user?.cellphone}
                </UserInfos>
              </>
            )}
            <UserInfos>
              Data de nasc.:&nbsp;
              {user?.birthday}
            </UserInfos>
            <UserInfos>
              CPF:&nbsp;
              {user?.cpf}
            </UserInfos>
            <BigInfo>Logradouro</BigInfo>
            {isEditing ? (
              <>
                <Input
                  title="Endereço"
                  placeholder="Rua dos Bobos, 0"
                  value={address}
                  onChangeText={(text: string) => setAddress(text)}
                />
                <Input
                  title="Complemento"
                  placeholder="Torre 1, apto 101"
                  value={complement}
                  onChangeText={(text: string) => setComplement(text)}
                />
                <Input
                  title="CEP"
                  placeholder="01234567"
                  value={cep}
                  onChangeText={(text: string) => setCep(text)}
                />
                <Input
                  title="UF"
                  placeholder="SP"
                  value={state}
                  onChangeText={(text: string) => setState(text)}
                />
                <Input
                  title="Cidade"
                  placeholder="São Paulo"
                  value={city}
                  onChangeText={(text: string) => setCity(text)}
                />
                <Button title="Salvar" active onPress={handlePressSave} />
                <Button
                  title="Cancelar"
                  active
                  danger
                  onPress={handlePressCancel}
                />
              </>
            ) : (
              <>
                <UserInfos>
                  Endereço:&nbsp;
                  {user?.address}
                </UserInfos>
                <UserInfos>
                  Complemento:&nbsp;
                  {user?.complement}
                </UserInfos>
                <UserInfos>
                  CEP:&nbsp;
                  {user?.cep}
                </UserInfos>
                <UserInfos>
                  UF:&nbsp;
                  {user?.state}
                </UserInfos>
                <UserInfos>
                  Cidade:&nbsp;
                  {user?.city}
                </UserInfos>
              </>
            )}
          </UserInfosContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Profile;
