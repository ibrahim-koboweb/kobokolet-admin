import { createContext, useState, useContext } from "react";
const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const isLoggedIn = async () => {};
  useState(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
