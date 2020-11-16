import Router from 'next/router'
import { loadTabs, loadTemplates, loadSettings } from '../lib/controller'
import { getSrc } from '../lib/kibanaURLParser'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'
import $ from 'jquery';

function useInterval(callback, delay) {
  const savedCallback = React.useRef()
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  React.useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default function ({ tabs, changeHeaderDisplay, scroll, cycle, setShowOptions, setTime, time }) {
  const [tabIndex, setTabIndex] = React.useState(0)
  const [frameHeight, setFrameHeight] = React.useState(1000)

  const changeTabIndex = (index) => {
    $('.tabpanel-iframe').stop(true);
    $('.tabpanel-iframe').animate({ scrollTop: 0 }, 10);
    setTabIndex(index);
    if(!scroll) return;
    let cycleTimeMs = tabs[index].data.cycleTime * 1000;
    setTimeout(() => {
      let panel = $('.tabpanel-iframe:not([hidden])');
      panel.animate({ scrollTop: panel.height() }, cycleTimeMs * 0.7);
    }, cycleTimeMs * 0.2);
  };

  React.useEffect(() => {
    window.$ = $;
    if (!tabs.length) {
      Router.push('/admin')
    } else {
      changeHeaderDisplay(tabs[tabIndex].title)
      setFrameHeight(window.innerHeight - 39)
      setShowOptions(true)
      changeTabIndex(tabIndex)
    }
  })

  useInterval((e) => changeTabIndex((tabIndex + 1) % tabs.length), cycle ? tabs[tabIndex].data.cycleTime * 1000 : null);

  return (
    <div width="100%">
      <Tabs
        width="100%"
        id="frameTabs"
        size="lg"
        index={tabIndex}
        onChange={(index) => {
          changeTabIndex(index)
        }}>
        <TabList id="frameTabs">
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabPanels p={0} m={0} width="100%">
          {tabs.map((tab, index) => {
            return (
              <TabPanel
                p={0}
                m={0}
                key={index}
                height={`${frameHeight}px`}
                width="100%"
                className="tabpanel-iframe">
                <iframe
                  src={getSrc(tab, time)}
                  width="100%"
                  height="200%"
                  scrolling="no"/>
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>
    </div>
  )
}

export async function getServerSideProps() {
  const tabs = loadTabs()
  const templates = loadTemplates()
  const settings = loadSettings()
  return { props: { tabs, templates, settings } }
}
