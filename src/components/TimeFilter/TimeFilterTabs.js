import { Box, Button } from '@chakra-ui/core'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'

export const TimeFilterTabs = ({show}) => {
  return (
    <Box mr={3} position="fixed" top={50} right={50} d={show ? 'block' : 'none'}>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
