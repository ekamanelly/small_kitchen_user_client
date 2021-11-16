import "../styles/globals.css";
// import "../styles/ch
import "../styles/chiStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
