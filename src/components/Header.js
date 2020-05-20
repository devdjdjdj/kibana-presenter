import React from 'react'
import { Heading, Flex, Switch, Box } from '@chakra-ui/core'

export const Header = ({ tabTitle, toggleScroll, showScroll }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="cyan.600"
      color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Kibana Presenter {tabTitle}
        </Heading>
      </Flex>
      <Box>
        <Heading as="h4" size="md">
          <Box d={showScroll ? 'inline-block' : 'none'}>
            Auto Scroll
            <Switch
              size="lg"
              ml={5}
              onChange={(e) => toggleScroll(e.target.checked)}
            />
          </Box>
        </Heading>
      </Box>
    </Flex>
  )
}
