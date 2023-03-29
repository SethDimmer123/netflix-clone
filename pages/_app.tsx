import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    // HOC
    <RecoilRoot>
      {/* Higher Order Component */}
  <AuthProvider>
    <Component {...pageProps} />
    </AuthProvider>
    </RecoilRoot>
  )
}// the AuthProvider component makes the react context available to the application

export default MyApp

// a provider is just a wrap around all of the components i want to have access
// and change the state


