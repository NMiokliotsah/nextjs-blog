import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react";
import Layout from '../components/Layout/Layout';
import Auth from '../components/Auth/Auth';

import '../styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return <SessionProvider session={session}>
    <Layout>
      <Head>
        <meta name='viewport' content='width=device=width, initial-scale=1' />
      </Head>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </Layout>
  </SessionProvider >
}
