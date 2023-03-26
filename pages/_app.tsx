import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'

function MyApp({ Component, pageProps }: AppProps) {
  return( <AuthProvider>
    <Component {...pageProps} />
    </AuthProvider>
  )
}// the AuthProvider component makes the react context available to the application

export default MyApp

// a provider is just a wrap around all of the components i want to have access
// and change the state


