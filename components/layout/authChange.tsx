import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
// import "firebase/compat/auth ";
import "firebase/compat/auth";
import useAuth from "../../hooks/auth.hook";

const AuthStateChange = ({ children }: { children: any }) => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  // const [apiCall, setApiCaller] = useApi()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      // setApiCaller(user);
    });
    //eslint-disable-next-line
  }, []);
  // apiCall.post()

  if (loading) {
    return <h1>loading....</h1>;
  }
  return children;
};

export default AuthStateChange;
