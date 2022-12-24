import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../i8next"
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <React.StrictMode>
      <React.Suspense fallback="loading">
        <Component {...pageProps} />
      </React.Suspense>
    </React.StrictMode>
  )
}