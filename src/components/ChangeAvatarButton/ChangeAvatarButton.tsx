import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {Avatar, Container} from './styles';
import {useTheme} from '../../contexts/ThemeManagerProvider';
import {darkMode, lightMode} from '../../themes/theme';

interface ChangeAvatarButtonProps {
  image?: string;
  sendImageUri?: (uri: string) => void;
}

const ChangeAvatarButton: React.FC<ChangeAvatarButtonProps> = ({
  image,
  sendImageUri,
}) => {
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
      if (sendImageUri) {
        sendImageUri(result.uri);
      }
    }
  };

  return (
    <Container activeOpacity={0.7} onPress={handleImagePicker}>
      {image || imageUri ? (
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
