import { Flex, Button } from '@chakra-ui/core'
import { TimeFilterTabs } from './TimeFilterTabs'

export const TimeFilter = ({ setTime, time }) => {
  const [show, setShow] = React.useState(false)

  const toggleShowTimeFilterTabs = () => {
    setShow(!show)
  }

  const handleTimeChange = (time) => {
    toggleShowTimeFilterTabs()
    setTime(time)
  }

  return (
    <Flex mr={3}>
      <Button
        variant="outline"
        _hover={{ bg: 'cyan.400' }}
        _active={{ bg: 'cyan.500' }}
        width="500px"
        mt={0}
        zIndex={9}
        onClick={toggleShowTimeFilterTabs}>
        {time.display}
      </Button>
      <TimeFilterTabs show={show} handleTimeChange={handleTimeChange} />
    </Flex>
  )
}
