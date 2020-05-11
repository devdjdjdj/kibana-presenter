import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/core'

import { Form } from './form'

function saveTabData(data) {
  console.log(data)
}

export function NewTabForm() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const saveTab = (name) => {
    console.log('Save Tab name  :' + name)
    onClose()
  }

  const [submit, setSubmit] = React.useState(false)

  return (
    <>
      <Button onClick={onOpen}>Add New Tab</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Tab</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form sub={submit} />
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button form="my-form" onClick={() => setSubmit(true)}>
              Save Tab
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
