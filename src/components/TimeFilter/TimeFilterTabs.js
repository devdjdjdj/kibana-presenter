import { Box } from '@chakra-ui/core'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'
import { Absolute } from './Tabs/Absolute'
import { Quick } from './Tabs/Quick'
import { Recent } from './Tabs/Recent'

export const TimeFilterTabs = ({ show, handleTimeChange }) => {
  return (
    <Box
      mr={3}
      position="absolute"
      top={75}
      right={200}
      d={show ? 'block' : 'none'}
      borderRadius={10}
      width="550px"
      height="230px"
      bg="white"
      boxShadow="0px 0px 45px 0px rgba(0,0,0,0.75)">
      <Tabs variant="enclosed" size="md" borderRadius={10} isFitted>
        <TabList bg="cyan.400" borderTopRightRadius={10} borderTopLeftRadius={10}>
          <Tab _selected={{ color: 'white', bg: 'cyan.700' }}>Quick</Tab>
          <Tab _selected={{ color: 'white', bg: 'cyan.700' }}>Absolute</Tab>
          <Tab _selected={{ color: 'white', bg: 'cyan.700' }}>Recent</Tab>
        </TabList>

        <TabPanels bg="white">
          <TabPanel>
            <Quick handleTimeChange={handleTimeChange} />
          </TabPanel>
          <TabPanel>
            <Absolute handleTimeChange={handleTimeChange} />
          </TabPanel>
          <TabPanel>
            <Recent handleTimeChange={handleTimeChange} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
