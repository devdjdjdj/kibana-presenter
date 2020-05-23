import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Header } from '../components/Header'

export default ({ Component, pageProps }) => {
  const [tabTitle, setTabTitle] = React.useState('')
  const [scroll, setScroll] = React.useState(false)
  const [showOptions, setShowOptions] = React.useState(true)

  const handleTabChange = (title) => {
    setTabTitle(` - Current Tab : ${title}`)
  }
  return (
    <ThemeProvider>
      <CSSReset />
      <Header tabTitle={tabTitle} toggleScroll={setScroll} showOptions={showOptions} />
      <Component
        {...pageProps}
        changeHeaderDisplay={handleTabChange}
        scroll={scroll}
        setShowOptions={setShowOptions}
      />
    </ThemeProvider>
  )
}
