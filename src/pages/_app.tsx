import { AppProps } from '../../node_modules/next/dist/shared/lib/router/router';
import React from 'react';
import Head from '../../node_modules/next/head';
import '../styles/global.scss';
import Layout from '../components/layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
