/* eslint-disable react/jsx-props-no-spreading */
import '../scss/index.scss'
import '@fontsource/lato'
import '@fontsource/kanit/400.css'

import type { AppProps } from 'next/app'
import { Client, HydrationProvider, Server } from 'react-hydration-provider'

import NavBar from '@/components/NavBar/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <HydrationProvider>
      <div className="container">
        <Server>
          <NavBar />
        </Server>
        <Client>
          <Component {...pageProps} />
        </Client>
      </div>
    </HydrationProvider>
  )
}

export default MyApp
