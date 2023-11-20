/* eslint-disable react/jsx-props-no-spreading */
import "../styles/global.scss";
import { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IndaStars</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
