import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ControlsProvider } from '../hooks/constrols'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ControlsProvider>
      <Component {...pageProps} />
    </ControlsProvider>
  )
}
