import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Header } from '../components/Header'
import { TIME } from '../../kibana-presenter-config'

export default ({ Component, pageProps}) => {
  const [tabTitle, setTabTitle] = React.useState('')
  const [scroll, setScroll] = React.useState(false)
  const [showOptions, setShowOptions] = React.useState(true)
  const [time, setTime] = React.useState(TIME)

  const handleTabChange = (title) => {
    setTabTitle(` - Current Tab : ${title}`)
  }

  return (
    <ThemeProvider>
      <CSSReset />
      <Header
        tabTitle={tabTitle}
        toggleScroll={setScroll}
        showOptions={showOptions}
        setTime={setTime}
        time={time}
      />
      <Component
        {...pageProps}
        changeHeaderDisplay={handleTabChange}
        scroll={scroll}
        setShowOptions={setShowOptions}
        setTime={setTime}
        time={time}
      />
    </ThemeProvider>
  )
}

