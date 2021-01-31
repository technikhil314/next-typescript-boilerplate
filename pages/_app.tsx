import "../styles/globals.scss";
import type { AppProps /*, AppContext */ } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("object", pageProps);
  return <Component {...pageProps} demo="demo" />;
}

export default MyApp;
