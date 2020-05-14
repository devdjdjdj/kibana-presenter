import Router from 'next/router'
import { getTabs, getTemplates } from '../lib/controller'
import { parseURL } from '../lib/kibanaURLParser'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'

export default function ({ tabs, templates, changeHeaderDisplay }) {
  React.useEffect(() => {
    if (!tabs.length) {
      Router.push('/admin')
    }
    changeHeaderDisplay(tabs[0].title)
  })
  const [frameHeight, setFrameHeight] = React.useState(1000)

  React.useEffect(() => {
    setFrameHeight(window.innerHeight - 51)
  })

  return (
    <div width="100%">
      <Tabs
        width="100%"
        id="frameTabs"
        size="lg"
        onChange={(index) => changeHeaderDisplay(tabs[index].title)}>
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
                as="iframe"
                src={parseURL(tab.data.kibanaURL)}
                width="100%"
                scrolling="auto"
                height={`${frameHeight}px`}
              />
            )
          })}
        </TabPanels>
      </Tabs>
    </div>
  )
}

export async function getServerSideProps() {
  const tabs = getTabs()
  const templates = getTemplates()
  return { props: { tabs, templates } }
}
