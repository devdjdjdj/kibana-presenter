import Router from 'next/router'
import { getTabs, getTemplates } from '../lib/controller'
import {Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'

export default function ({ tabs, templates }) {
  React.useEffect(() => {
    if (!tabs.length) {
      Router.push('/admin')
    }
  })

  return (
    <div>
      <Tabs>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel p={4} key={index}>
              <iframe
                width="100%"
                as="iframe"
                scrolling="auto" height="750px"
                src={tab.data.kibanaURL}
                // src={tab.data.kibanaURL.replace('_g', 'embed=true&_g')}

              />
            </TabPanel>
          ))}
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
