import { Flex, Button } from '@chakra-ui/core'
import { TimeFilterTabs } from './TimeFilterTabs'

export const TimeFilter = () => {
  const [show, setShow] = React.useState(false)

  const toggleShowTimeFilterTabs = () => {
    console.log('TimeFilter Button Clicked')
    setShow(!show)
  }

  return (
    <Flex mr={3}>
      <Button
        variant="outline"
        _hover={{ bg: 'cyan.400' }}
        _active={{ bg: 'cyan.500' }}
        mt={0}
        zIndex={9}
        onClick={toggleShowTimeFilterTabs}>
        Timekeeper
      </Button>
      <TimeFilterTabs show={show} />
    </Flex>
  )
}
