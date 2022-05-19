import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Alert} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import User, {UserRegister} from '../interfaces/User';
import {getUserById, loginApi, registerApi, updateApi} from '../api/user';
import Loader from '../components/Loader/Loader';

interface AuthContextData {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (newUser: User) => Promise<void>;
  registerUser: (newUser: UserRegister) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  appIsReady: boolean;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children, appIsReady}) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
  const {getItem, setItem} = useAsyncStorage('@userid');

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        setIsLoading(true);
        const response = await loginApi(email, password);
        if (response.success) {
          setIsLoading(false);
          setUser(response.user);
          setItem(response.user!._id!);
        } else {
          setIsLoading(false);
          Alert.alert('Ocorreu um erro', response.message, [{text: 'OK'}]);
        }
      } catch (error) {
        setIsLoading(false);
        Alert.alert('Ocorreu um erro', 'Tente novamente mais tarde', [
          {text: 'OK'},
        ]);
      }
    },
    [setItem],
  );

  const logout = useCallback(() => {
    setUser(undefined);
    setItem('');
  }, [setItem]);

  const updateUser = useCallback(async (newUser: User) => {
    try {
      setIsLoading(true);
      const response = await updateApi(newUser);
      if (response.success) {
        setUser(newUser);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        Alert.alert('Ocorreu um erro', response.message, [{text: 'OK'}]);
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro', 'Tente novamente mais tarde', [
        {text: 'OK'},
      ]);
    }
  }, []);

  const registerUser = useCallback(async (newUser: UserRegister) => {
    try {
      setIsLoading(true);
      const response = await registerApi(newUser);
      if (response.success) {
        const userWithoutPassword = newUser;
        delete userWithoutPassword.password;
        delete userWithoutPassword.passwordConfirmation;
        setUser(userWithoutPassword as User);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        Alert.alert('Ocorreu um erro', response.message, [{text: 'OK'}]);
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro', 'Tente novamente mais tarde', [
        {text: 'OK'},
      ]);
    }
  }, []);

  const returnValues = useMemo(
    () => ({
      user,
      login,
      logout,
      updateUser,
      registerUser,
    }),
    [user, login, logout, updateUser, registerUser],
  );

  const loginFromStorage = async () => {
    const id = await getItem();
    if (!id) {
      await SplashScreen.hideAsync();
      return;
    }

    try {
      const response = await getUserById(id);
      if (!response.success) {
        await SplashScreen.hideAsync();
        Alert.alert(
          'Ocorreu um erro',
          'Ocorreu um erro ao logar automaticamente',
          [{text: 'OK'}],
        );
        return;
      }

      setUser(response.user);
      await SplashScreen.hideAsync();
    } catch (error) {
      await SplashScreen.hideAsync();
      Alert.alert(
        'Ocorreu um erro',
        'Ocorreu um erro ao logar automaticamente',
        [{text: 'OK'}],
      );
    }
  };

  useEffect(() => {
    if (appIsReady && !user) {
      loginFromStorage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appIsReady, user]);

  return (
    <AuthContext.Provider value={returnValues as AuthContextData}>
      <Loader isActive={isLoading} />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
