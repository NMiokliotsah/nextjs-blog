import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { SessionProvider, useSession } from "next-auth/react";

import '../styles/globals.css';
import AuthPage from './auth';
import React from 'react';


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

interface AuthProps {
  children?: React.ReactNode,
}

function Auth({ children }: AuthProps) {
  const { data: session } = useSession();

  if (!session) {
    return <AuthPage />
  }

  return children;
}
