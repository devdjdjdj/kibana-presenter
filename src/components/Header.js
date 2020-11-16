import React from 'react'
import { Heading, Flex, Switch, Box, Divider } from '@chakra-ui/core'
import { TimeFilter } from './TimeFilter'

export const Header = ({ tabTitle, toggleScroll, toggleCycle, showOptions, setTime, time }) => {
  return (
    <Flex
      position="sticky"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="cyan.600"
      color="white">
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
            <Switch size="md" ml={5} onChange={(e) => toggleScroll(e.target.checked)} />
          </Box>
        </Heading>
        <Divider orientation="vertical" mr={5} ml={5} />
        <Heading as="h4" size="sm" mt={2}>
          <Box>
            Auto Cycle
            <Switch size="md" ml={5} onChange={(e) => toggleCycle(e.target.checked)} />
          </Box>
        </Heading>
      </Flex>
    </Flex>
  )
}
