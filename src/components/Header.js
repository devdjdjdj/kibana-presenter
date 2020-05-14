import React from 'react'
import { Heading, Flex } from '@chakra-ui/core'

export const Header = ({ tabTitle }) => {
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
    </Flex>
  )
}
