import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { RecoilRoot } from 'recoil'
import Head from 'next/head';





function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* Higher Order Component */}
      {/*<AuthProvider>
        <Component {...pageProps} />
  </AuthProvider>*/}
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
