import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {Avatar, Container} from './styles';

const ChangeAvatarButton: React.FC = () => {
  const [imageUri, setImageUri] = useState('');

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <Container activeOpacity={0.7} onPress={handleImagePicker}>
      {imageUri ? (
        <Avatar source={{uri: imageUri}} />
      ) : (
        <Feather name="camera" size={48} color="black" />
      )}
    </Container>
  );
};

export default ChangeAvatarButton;
