import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/core'

import { Form } from './form'

export function NewTabForm() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Add New Tab</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Tab</ModalHeader>
          <ModalCloseButton />
          <Form onClose={onClose}/>
        </ModalContent>
      </Modal>
    </>
  )
}
