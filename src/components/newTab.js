import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/core'

function saveTabData(data) {
  console.log(data)
}

export function NewTab() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const saveTab = () => {
    console.log("Save Tab data")
    onClose()
  }
  return (
    <>
      <Button onClick={onOpen}>Add New Tab</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Tab</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Form Data
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={saveTab}>Save Tab</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
