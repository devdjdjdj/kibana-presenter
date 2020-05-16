import React from 'react'
import { Heading, Flex, Switch, Box, FormLabel } from '@chakra-ui/core'

export const Header = ({ tabTitle, toggleScroll }) => {
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
          Auto Scroll
          <Switch
            size="lg"
            ml={5}
            onChange={(e) => toggleScroll(e.target.checked)}
          />
        </Heading>
      </Box>
    </Flex>
  )
}
