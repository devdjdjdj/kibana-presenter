import {
  Stack,
  Input,
  NumberInput,
  Button,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/core'

export const Form = ({onClose}) => {
  return (
    <form id="newTab">
      <ModalBody>
        <Stack spacing={5}>
          <Input placeholder="Name" isRequired size="lg"></Input>
          <Input placeholder="Kibana URL" isRequired size="md"></Input>
          <NumberInput
            placeholder="Scroll Time"
            defaultValue={15}
            size="md"></NumberInput>
        </Stack>
      </ModalBody>

      <ModalFooter>
        <Button variantColor="blue" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button type="submit">Save Tab</Button>
      </ModalFooter>
    </form>
  )
}
