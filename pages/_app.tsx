import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { SessionProvider } from "next-auth/react"

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
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
}
