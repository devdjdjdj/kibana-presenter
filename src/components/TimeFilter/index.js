import { Flex, Button } from '@chakra-ui/core'

export const TimeFilter = () => {
  return (
    <Flex mr={3}>
      <Button _hover={{ bg: 'cyan.400' }} _active={{ bg: 'cyan.500' }} variant="outline">
        Timekeeper
      </Button>
    </Flex>
  )
}
