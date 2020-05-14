import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Header } from '../components/Header'

export default ({ Component, pageProps }) => {
  const [tabTitle, setTabTitle] = React.useState('')
  const handleTabChange = (title) => {
    console.log('Tab changed' + title)
    setTabTitle(` - Current Tab : ${title}`)
  }
  return (
    <ThemeProvider>
      <CSSReset />
      <Header tabTitle={tabTitle} />
      <Component {...pageProps} changeHeaderDisplay={handleTabChange} />
    </ThemeProvider>
  )
}
