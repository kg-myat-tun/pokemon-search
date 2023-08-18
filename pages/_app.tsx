// pages/_app.tsx
import '../styles/tailwind.css'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import apolloClient from '../lib/apollo'
import ReduxProvider from '../redux/Provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ReduxProvider>
  )
}

export default MyApp
