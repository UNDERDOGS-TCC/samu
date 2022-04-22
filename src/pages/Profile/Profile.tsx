import React, {useEffect, useState} from 'react';
import ChangeAvatarButton from '../../components/ChangeAvatarButton/ChangeAvatarButton';
import {useAuth} from '../../contexts/AuthProvider';
import {
  Container,
  ProfilePicContainer,
  ScrollView,
  UserInfosContainer,
  UserInfos,
  BigInfo,
} from './styles';

const Profile: React.FC = () => {
  const [imageUri, setImageUri] = useState('');
  const {user} = useAuth();

  const getImageUri = (uri: string) => {
    setImageUri(uri);
  };

  useEffect(() => {
    console.log(imageUri);
  }, [imageUri]);

  return (
    <Container>
      <ScrollView>
        <ProfilePicContainer>
          <ChangeAvatarButton sendImageUri={getImageUri} />
        </ProfilePicContainer>
        <UserInfosContainer>
          <BigInfo>{user?.name}</BigInfo>
          <UserInfos>
            Email:&nbsp;
            {user?.email}
          </UserInfos>
          <UserInfos>
            Cel.:&nbsp;
            {user?.cellphone}
          </UserInfos>
          <UserInfos>
            Data de nasc.:&nbsp;
            {user?.birthday}
          </UserInfos>
          <UserInfos>
            CPF:&nbsp;
            {user?.cpf}
          </UserInfos>
          <BigInfo>Logradouro</BigInfo>
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
        </UserInfosContainer>
      </ScrollView>
    </Container>
  );
};

export default Profile;
