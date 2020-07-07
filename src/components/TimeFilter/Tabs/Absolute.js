import { Box, Button } from '@chakra-ui/core'

export function Absolute({ handleTimeChange }) {
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(new Date())
  const [focusedInput, setFocusedInput] = React.useState()

  const getDisplayText = (from, to) => {
    return `${from.toDateString()}  - ${to.toDateString()} ${to.getHours()}:${
      to.getMinutes() > 9 ? to.getMinutes() : '0' + to.getMinutes()
    }`
  }

  const handleClick = () => {
    const from = new Date(startDate)
    const to = new Date(endDate)
    const time = {
      from: "'" + from.toISOString() + "'",
      mode: 'absolute',
      to: "'" + to.toISOString() + "'",
      display: getDisplayText(from, to),
    }
    console.log(time)
    handleTimeChange(time)
  }

  return (
    <Box color="black" p={5}>
      <Button onClick={handleClick}>Go</Button>
    </Box>
  )
}
