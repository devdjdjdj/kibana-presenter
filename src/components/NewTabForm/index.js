import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, useDisclosure, Button } from '@chakra-ui/core'

import { Form } from './form'

export function NewTabForm({ tabs }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} variantColor="blue">
        Add New Tab
      </Button>
      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Tab</ModalHeader>
          <ModalCloseButton />
          <Form onClose={onClose} tabData={tabs} />
        </ModalContent>
      </Modal>
    </>
  )
}
