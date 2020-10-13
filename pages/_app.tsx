import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import 'styles/global.css'
import 'styles/prism-theme.css'
import { DefaultSeo } from 'next-seo'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo titleTemplate="%s - Developer, CS Student from Germany" />
    <Component {...pageProps} />
  </>
)

export default App
