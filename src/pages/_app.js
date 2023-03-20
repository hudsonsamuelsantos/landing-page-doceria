import '@/styles/globals.css'
import '@/assets/fonts/style.css'

import { ModalContextProvider } from '@/context/ModalContext'

export default function App({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
  )
}
