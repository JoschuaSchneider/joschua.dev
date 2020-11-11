import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import 'styles/global.css'
import 'styles/prism-theme.css'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      titleTemplate="%s - Joschua Schneider"
      twitter={{
        cardType: 'summary',
        site: '@joschuadev',
      }}
    />
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
