import React from 'react'
import { Heading, Flex, Switch, Box, Divider } from '@chakra-ui/core'
import { TimeFilter } from './TimeFilter'

export const Header = ({ tabTitle, toggleScroll, showOptions }) => {
  return (
    <Flex
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
        <Heading as="h4" size="md" mt={1}>
          <Box >
            Auto Scroll
            <Switch size="lg" ml={5} onChange={(e) => toggleScroll(e.target.checked)} />
          </Box>
        </Heading>
        <Divider orientation="vertical" mr={5} ml={5} />
        <Flex  >
          <TimeFilter />
        </Flex>
      </Flex>
    </Flex>
  )
}
