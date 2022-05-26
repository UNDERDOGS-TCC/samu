import React, {useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Alert, ImageSourcePropType, StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import {useTheme} from '../../contexts/ThemeManagerProvider';
import {useAuth} from '../../contexts/AuthProvider';
import {
  Container,
  ClosedDrawerIcon,
  DrawerIconContainer,
  UserContainer,
  UserMessageContainer,
  UserMessageTitle,
  UserMessageSubtitle,
  UserPictureContainer,
  UserPicture,
  UserMessage,
  SamuButtonContainer,
  SamuButton,
  LeftButtonContainer,
  RightButtonContainer,
  SamuImage,
  LeftButtonTitle,
  LeftButtonDescription,
  OtherServicesContainer,
  OtherServicesTitle,
  OtherServicesListContainer,
  OtherServicesList,
  OtherServicesListItem,
  OtherServicesListItemText,
  OtherServicesListImage,
} from './styles';

import samuImage from '../../../assets/carro-ambulancia.png';

import otherServicesList, {
  OtherServicesListInterface,
} from '../../utils/otherServicesList';
import Loader from '../../components/Loader/Loader';

interface NavigationProps extends NavigationProp<any> {
  openDrawer: () => void;
}

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const {isDarkMode, lightMode, darkMode} = useTheme();
  const {user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const renderList = (item: OtherServicesListInterface, index: number) => {
    const isFirstItem = index === 0;
    const isLastItem = index === otherServicesList.length - 1;

    return (
      <OtherServicesListItem
        onPress={() =>
          navigation.navigate('ComingSoon', {pageTitle: item.pageTitle})
        }
        marginRight={isLastItem ? 20 : undefined}
        marginLeft={isFirstItem ? 20 : undefined}
      >
        <OtherServicesListImage resizeMode="contain" source={item.image} />
        <OtherServicesListItemText>{item.title}</OtherServicesListItemText>
      </OtherServicesListItem>
    );
  };

  const getWelcomeMessage = () => {
    const hour = Number(new Date().toLocaleTimeString().split(':')[0]);
    if (hour >= 6 && hour < 12) {
      return 'Bom dia,';
    }
    if (hour >= 12 && hour < 18) {
      return 'Boa tarde,';
    }
    if (hour >= 18 && hour < 24) {
      return 'Boa noite,';
    }
    if (hour >= 0 && hour < 6) {
      return 'Boa madrugada,';
    }
    return 'Bem vindo,';
  };

  const handleCallSamu = async () => {
    try {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Ocorreu um erro', 'Permissão para localização negada!', [
          {text: 'OK'},
        ]);
        return;
      }

      setIsLoading(true);

      const currentLocation = await Location.getCurrentPositionAsync({});
      const userLocation = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      const currentAddress = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      setIsLoading(false);
      navigation.navigate('Mapa', {userLocation, currentAddress});
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro', 'Erro ao obter localização!', [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <Container>
      <Loader isActive={isLoading} />
      <DrawerIconContainer>
        <ClosedDrawerIcon
          onPress={() => navigation.openDrawer()}
          color={
            isDarkMode ? darkMode.main.colors.text : lightMode.main.colors.text
          }
        />
      </DrawerIconContainer>
      <UserContainer>
        <UserMessageContainer>
          <UserMessage>
            <UserMessageTitle>{getWelcomeMessage()}</UserMessageTitle>
            <UserMessageSubtitle>
              {user?.name.split(' ')[0]}
            </UserMessageSubtitle>
          </UserMessage>
        </UserMessageContainer>
        <UserPictureContainer onPress={() => navigation.navigate('Perfil')}>
          <UserPicture
            source={{uri: `data:image/jpg;base64,${user?.imageUri}`}}
          />
        </UserPictureContainer>
      </UserContainer>
      <SamuButtonContainer>
        <SamuButton onPress={handleCallSamu} style={styles.shadow}>
          <LeftButtonContainer>
            <LeftButtonTitle>SAMU</LeftButtonTitle>
            <LeftButtonDescription>
              Chamar serviço de emergência
            </LeftButtonDescription>
          </LeftButtonContainer>
          <RightButtonContainer>
            <SamuImage
              resizeMode="contain"
              source={samuImage as ImageSourcePropType}
            />
          </RightButtonContainer>
        </SamuButton>
      </SamuButtonContainer>
      <OtherServicesContainer>
        <OtherServicesTitle>Outros Serviços</OtherServicesTitle>
        <OtherServicesListContainer>
          <OtherServicesList
            horizontal
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false}
            data={otherServicesList}
            renderItem={({item, index}) => renderList(item, index)}
          />
        </OtherServicesListContainer>
      </OtherServicesContainer>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
