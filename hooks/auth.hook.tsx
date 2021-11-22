// import { createContext } from "react";

import { createContext, useContext, useState } from "react";
import { AuthService } from "../services/firebase/firebaseAuth.service";

interface AuthorizedUser {
  name: string;
  author: string;
  url: string;
  uid: string;
}

const AuthContext = createContext<any>(null);

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    setUser(user);
    //
    setError(error);
  };
  const logOut = async () => {
    await AuthService.logout();
    setUser(null);
  };
  const value = { error, user, loginWithGoogle, logOut, setUser, setError };

  return <AuthContext.Provider value={value} {...props} />;
}
