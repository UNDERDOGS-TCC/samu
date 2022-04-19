import React, {createContext, useMemo} from 'react';

const AuthContext = createContext({signed: true});

const AuthProvider: React.FC = ({children}) => {
  console.log('a');

  const returnValues = useMemo(() => ({signed: true}), []);

  return (
    <AuthContext.Provider value={returnValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
