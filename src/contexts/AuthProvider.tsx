import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {Alert} from 'react-native';
import User, {UserRegister} from '../interfaces/User';
import {loginApi, registerApi, updateApi} from '../api/user';
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

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    const response = await loginApi(email, password);
    if (response.success) {
      setIsLoading(false);
      setUser(response.user);
    } else {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro', response.message, [{text: 'OK'}]);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(undefined);
  }, []);

  const updateUser = useCallback(async (newUser: User) => {
    setIsLoading(true);
    const response = await updateApi(newUser);
    if (response.success) {
      setUser(newUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro', response.message, [{text: 'OK'}]);
    }
  }, []);

  const registerUser = useCallback(async (newUser: UserRegister) => {
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

  return (
    <AuthContext.Provider value={returnValues as AuthContextData}>
      <Loader isActive={isLoading} />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
