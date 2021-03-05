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
  const [tabSrc, setTabSrc] = React.useState(null);

  const changeTabIndex = (index) => {
    $('.tabpanel-iframe').stop(true);
    $('.tabpanel-iframe').animate({ scrollTop: 0 }, 10);
    setTabIndex(index);
    setTabSrc(getSrc(tabs[index], time));
    let cycleTimeMs = tabs[index].data.cycleTime * 1000;
    setTimeout(() => {
      let panel = $('.tabpanel-iframe:not([hidden])');
      panel.find('iframe').height(tabs[index].data.frameHeight || '100%');
      if(scroll) panel.animate({ scrollTop: panel.height() }, cycleTimeMs * 0.6);
    }, cycleTimeMs * 0.3);
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
        <div class="tabpanel-iframe">
          <iframe
            src={tabSrc}
            width="100%"
            height="100%"
            scrolling="no"/>
        </div>
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
