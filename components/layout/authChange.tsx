import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
// import "firebase/compat/auth ";
import "firebase/compat/auth";
import useAuth from "../../hooks/auth.hook";

const AuthStateChange = ({ children }: { children: any }) => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>loading....</h1>;
  }
  return children;
};

export default AuthStateChange;
