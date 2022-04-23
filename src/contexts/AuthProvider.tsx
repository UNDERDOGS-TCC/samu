import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import User from '../interfaces/User';
import {loginApi, updateApi} from '../api/user';
import Loader from '../components/Loader/Loader';

interface AuthContextData {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (newUser: User) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    const response = await loginApi(email, password);
    if (response) {
      setIsLoading(false);
      setUser(response);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(undefined);
  }, []);

  const updateUser = useCallback(async (newUser: User) => {
    setIsLoading(true);
    const response = await updateApi(newUser);
    if (response) {
      setUser(newUser);
      setIsLoading(false);
    }
  }, []);

  const returnValues = useMemo(
    () => ({
      user,
      login,
      logout,
      updateUser,
    }),
    [user, login, logout, updateUser],
  );

  return (
    <AuthContext.Provider value={returnValues as AuthContextData}>
      <Loader isActive={isLoading} />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
