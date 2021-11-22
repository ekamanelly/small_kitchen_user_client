import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../services/firebase/firebase.service";

import "bootstrap/dist/css/bootstrap.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/auth.hook";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;
