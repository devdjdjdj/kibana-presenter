import { Box, Button } from '@chakra-ui/core'
import React, { Component } from 'react'
import { DateRangePicker } from 'react-dates'

export class Absolute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    }
  }

  render() {
    return (
      <Box color="black">
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate })
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => {
            this.setState({ focusedInput })
          }}
        />
      </Box>
    )
  }
}
