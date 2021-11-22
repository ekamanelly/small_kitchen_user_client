import React from "react";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../services/firebase/firebase.service";

import "firebase/compat/auth";
import useAuth from "../hooks/auth.hook";

function SignInScreen() {
  const { error, user, loginWithGoogle, logOut } = useAuth();
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Pineapple Login</h1>
      <p>Please sign-in:</p>
      <button onClick={loginWithGoogle}>login with google</button>
      {error}
    </div>
  );
}

export default SignInScreen;
