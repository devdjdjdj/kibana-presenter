import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Header } from '../components/Header'
import '../styles/global.css';

export default ({ Component, pageProps }) => {
  const [tabTitle, setTabTitle] = React.useState('')
  const [scroll, setScroll] = React.useState(false)
  const [cycle, setCycle] = React.useState(false)
  const [showOptions, setShowOptions] = React.useState(true)

  let defaultTime = { from: 'now-7d', to: 'now/d', display: 'Last 7 days' }
  const [time, setTime] = React.useState(pageProps.settings?.time || defaultTime)

  const handleTabChange = (title) => {
    setTabTitle(` - Current Tab : ${title}`)
  }

  return (
    <ThemeProvider>
      <CSSReset />
      <Header {...pageProps}
              tabTitle={tabTitle}
              setScroll={setScroll}
              setCycle={setCycle}
              showOptions={showOptions}
              setTime={setTime}
              time={time}/>
      <Component
        {...pageProps}
        changeHeaderDisplay={handleTabChange}
        scroll={scroll}
        cycle={cycle}
        setShowOptions={setShowOptions}
        setTime={setTime}
        time={time}
      />
    </ThemeProvider>
  )
}
