import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Header } from '../components/Header'
import { TIME } from '../../kibana-presenter-config'
import '../styles/global.css';

export default ({ Component, pageProps }) => {
  const [tabTitle, setTabTitle] = React.useState('')
  const [scroll, setScroll] = React.useState(false)
  const [cycle, setCycle] = React.useState(false)
  const [showOptions, setShowOptions] = React.useState(true)
  const [time, setTime] = React.useState(TIME)

  const handleTabChange = (title) => {
    setTabTitle(` - Current Tab : ${title}`)
  }

  return (
    <ThemeProvider>
      <CSSReset />
      <Header tabTitle={tabTitle}
              toggleScroll={setScroll}
              toggleCycle={setCycle}
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
