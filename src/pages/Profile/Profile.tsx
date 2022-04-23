import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
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
  const [imageUri, setImageUri] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const {user} = useAuth();
  const insets = useSafeAreaInsets();

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

  useEffect(() => {
    console.log(imageUri);
  }, [imageUri]);

  const handlePressSave = () => {
    console.log('aa');
    setIsEditing(false);
  };

  return (
    <Container>
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
                value={user?.email}
                onChangeText={() => console.log('bb')}
              />
              <Input
                title="Celular"
                placeholder="11912345678"
                value={user?.cellphone}
                onChangeText={() => console.log('aa')}
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
                value={user?.address}
                onChangeText={() => console.log('aa')}
              />
              <Input
                title="Complemento"
                placeholder="Torre 1, apto 101"
                value={user?.complement}
                onChangeText={() => console.log('aa')}
              />
              <Input
                title="CEP"
                placeholder="01234567"
                value={user?.cep}
                onChangeText={() => console.log('aa')}
              />
              <Input
                title="UF"
                placeholder="SP"
                value={user?.state}
                onChangeText={() => console.log('aa')}
              />
              <Input
                title="Cidade"
                placeholder="São Paulo"
                value={user?.city}
                onChangeText={() => console.log('aa')}
              />
              <Button title="Salvar" active onPress={handlePressSave} />
              <Button
                title="Cancelar"
                active
                danger
                onPress={() => setIsEditing(false)}
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
    </Container>
  );
};

export default Profile;
