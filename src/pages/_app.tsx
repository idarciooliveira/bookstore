import '../styles/globals.css'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import PageWithLayoutType from '../types/pageWithLayout'

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {

  const Layout = Component.layout || ((children: ReactElement) => <>{children}</>)

  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
