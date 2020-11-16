import React from 'react'
import { Heading, Flex, Switch, Box, Divider } from '@chakra-ui/core'
import { TimeFilter } from './TimeFilter'

export const Header = ({ settings, tabTitle, setScroll, setCycle, showOptions, setTime, time }) => {
  const [headerVisible, setHeaderVisible] = React.useState(true)

  const updateSetting = (key, value) => {
    if(!settings) return;
    let newSettings = Object.assign(settings, { [key]: value })
    return fetch('/api/settings', {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSettings),
    }).then((response) => {
      settings = newSettings
    })
  }

  React.useEffect(() => {
    setScroll(settings?.scroll || false);
    setCycle(settings?.cycle || false);
    setHeaderVisible(settings?.hasOwnProperty('headerVisible') ? settings?.headerVisible : true);
  });


  const updateScroll = (checked) => {
    updateSetting('scroll', checked);
    setScroll(checked);
  };

  const updateCycle = (checked) => {
    updateSetting('cycle', checked);
    setCycle(checked);
  };

  const updateVisible = (checked) => {
    updateSetting('headerVisible', checked);
    setHeaderVisible(checked);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      position="relative"
      wrap="wrap"
      padding="1rem"
      bg="cyan.600"
      color="white"
      id="flexHeader"
      className={headerVisible ? 'visible' : ''}>
      <Flex align="left" mr={5}>
        <Heading as="h1" size="lg">
          Kibana Presenter {tabTitle}
        </Heading>
      </Flex>
      <Flex align="right" d={showOptions ? 'flex' : 'none'}>
        <Flex>
          <TimeFilter setTime={setTime} time={time} />
        </Flex>
        <Divider orientation="vertical" mr={5} ml={5} />
        <Heading as="h4" size="sm" mt={2}>
          <Box>
            Auto Scroll
            <Switch size="md" ml={5} defaultIsChecked={settings?.scroll} onChange={(e) => updateScroll(e.target.checked)} />
          </Box>
        </Heading>
        <Divider orientation="vertical" mr={5} ml={5} />
        <Heading as="h4" size="sm" mt={2}>
          <Box>
            Auto Cycle
            <Switch size="md" ml={5} defaultIsChecked={settings?.cycle} onChange={(e) => updateCycle(e.target.checked)} />
          </Box>
        </Heading>
      </Flex>
      <div id="headerToggle" onClick={(e) => updateVisible(!headerVisible)}>
        {headerVisible ? '-' : '+'}
      </div>
    </Flex>
  )
}