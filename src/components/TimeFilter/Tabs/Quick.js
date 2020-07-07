import quickRanges from '../config'
import { Grid, Box } from '@chakra-ui/core'
import styled from '@emotion/styled'

export const Quick = ({ handleTimeChange }) => {
  const handleClick = (time) => {
    time['mode'] = 'quick'
    handleTimeChange(time)
  }

  const QuickTimeLink = styled('div')`
    margin-left: 10px;
    :hover {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
    }
  )`

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={2} color="black" pt={5}>
      <Box w="100%">
        {quickRanges
          .filter((e) => e.section === 0)
          .map((x, i) => (
            <QuickTimeLink key={i} onClick={(e) => handleClick(x)}>
              {x.display}
            </QuickTimeLink>
          ))}
      </Box>
      <Box w="100%">
        {quickRanges
          .filter((e) => e.section === 1)
          .map((x, i) => (
            <QuickTimeLink key={i} onClick={(e) => handleClick(x)}>
              {x.display}
            </QuickTimeLink>
          ))}
      </Box>
      <Box w="100%">
        {quickRanges
          .filter((e) => e.section === 2)
          .map((x, i) => (
            <QuickTimeLink key={i} onClick={(e) => handleClick(x)}>
              {x.display}
            </QuickTimeLink>
          ))}
      </Box>
      <Box w="100%">
        {quickRanges
          .filter((e) => e.section === 3)
          .map((x, i) => (
            <QuickTimeLink key={i} onClick={(e) => handleClick(x)}>
              {x.display}
            </QuickTimeLink>
          ))}
      </Box>
    </Grid>
  )
}
