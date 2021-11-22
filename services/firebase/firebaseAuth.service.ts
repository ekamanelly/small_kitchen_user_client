import firebase from "firebase/compat/app";
// import "firebase/compat/auth ";
import "firebase/compat/auth";

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const { user } = await firebase.auth().signInWithPopup(provider);
      return {
        user,
      };
    } catch (error: any) {
      console.log(error);
      return {
        error: error.message,
      };
    }
  },

  logout: async () => {
    await firebase.auth().signOut();
  },
};
