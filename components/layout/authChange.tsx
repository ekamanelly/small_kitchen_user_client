import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
// import "firebase/compat/auth ";
import "firebase/compat/auth";
import useAuth from "../../hooks/auth.hook";
import LottieAnimation from "../animation/lottieAnimation";
import loadingIcon from "../../public/animation/loading.json";

const AuthStateChange = ({ children }: { children: any }) => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  // const [apiCall, setApiCaller] = useApi()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      // setApiCaller(user);
    });
    //eslint-disable-next-line
  }, []);
  // apiCall.post()

  if (loading) {
    return <LottieAnimation lotti={loadingIcon} height={600} width={600} />;
  }
  return children;
};

export default AuthStateChange;
