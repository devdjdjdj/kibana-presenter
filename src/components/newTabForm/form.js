import { Stack, Input, NumberInput, Button } from '@chakra-ui/core'
import { useEffect } from 'react'

export const Form = ({ sub }) => {
  const finallySubmit = () => {
    alert('Form submitted!')
  }

  useEffect(() => {
    if (sub) {
      finallySubmit()
    }
  })

  return (
    <form id="newTab">
      <Stack spacing={5}>
        <Input placeholder="Name" isRequired size="lg"></Input>
        <Input placeholder="Kibana URL" isRequired size="md"></Input>
        <NumberInput
          placeholder="Scroll Time"
          defaultValue={15}
          size="md"></NumberInput>
      </Stack>
    </form>
  )
}
