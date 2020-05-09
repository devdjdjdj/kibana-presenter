import { ThemeProvider, CSSReset } from '@chakra-ui/core'

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <CSSReset />
    <Component {...pageProps} />
  </ThemeProvider>
)
