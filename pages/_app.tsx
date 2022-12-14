import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ControlsProvider } from '../hooks/controls'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ControlsProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </ControlsProvider>
  )
}
