import '../styles/globals.scss';
import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): React.FC {
  return <Component {...pageProps} demo="demo" />;
}

export default MyApp;
