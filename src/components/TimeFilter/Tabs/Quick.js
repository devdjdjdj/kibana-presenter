import quickRanges from '../config'
import { Box } from '@chakra-ui/core'

export const Quick = ({ handleTimeChange }) => {
  const handleClick = (time) => {
    time['mode'] = 'quick'
    handleTimeChange(time)
  }

  return (
    <Box color="black" p={2}>
      <table>
        <tbody>
          <tr>
            <td>
              {quickRanges
                .filter((e) => e.section === 0)
                .map((x, i) => (
                  <div key={i} onClick={(e) => handleClick(x)}> {x.display}</div>
                ))}
            </td>
            <td>
              {quickRanges
                .filter((e) => e.section === 1)
                .map((x, i) => (
                  <div key={i} onClick={(e) => handleClick(x)}> {x.display}</div>
                ))}
            </td>
            <td>
              {quickRanges
                .filter((e) => e.section === 2)
                .map((x, i) => (
                  <div key={i} onClick={(e) => handleClick(x)}> {x.display}</div>
                ))}
            </td>
            <td>
              {quickRanges
                .filter((e) => e.section === 3)
                .map((x, i) => (
                  <div key={i} onClick={(e) => handleClick(x)}> {x.display}</div>
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  )
}
