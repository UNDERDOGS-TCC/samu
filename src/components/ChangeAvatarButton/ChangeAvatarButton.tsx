import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {Avatar, Container} from './styles';
import {useTheme} from '../../themes/ThemeManagerProvider';
import {darkMode, lightMode} from '../../themes/theme';

const ChangeAvatarButton: React.FC = () => {
  const {isDarkMode} = useTheme();
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
        <Feather
          name="camera"
          size={48}
          color={
            isDarkMode
              ? darkMode.main.colors.placeholder
              : lightMode.main.colors.placeholder
          }
        />
      )}
    </Container>
  );
};

export default ChangeAvatarButton;
