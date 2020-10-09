import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import 'styles/global.css'
import 'styles/prism-theme.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
