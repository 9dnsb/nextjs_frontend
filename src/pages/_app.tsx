/* eslint-disable react/jsx-props-no-spreading */
import '../scss/index.scss'
import '@fontsource/lato'
import '@fontsource/kanit/400.css'

import type { AppProps } from 'next/app'

import NavBar from '@/components/NavBar/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div className="container">
      <NavBar />
      <div className="containerMainContent">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
