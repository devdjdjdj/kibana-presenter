import {
  Stack,
  Input,
  NumberInput,
  Button,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/core'
import Router from 'next/router'

export const Form = ({ onClose, tabData }) => {
  const [tabTitle, setTabTitle] = React.useState('')
  const [kibanaURL, setKibanaURL] = React.useState('')
  const [frameHeight, setFrameHeight] = React.useState('');
  const [cycleTime, setCycleTime] = React.useState(10)
  const submitDisabled = !(tabTitle.length > 0 && kibanaURL.length > 0)

  const handleSubmit = (e) => {
    fetch('/api/tabs', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: tabTitle.trim(),
        data: {
          kibanaURL: kibanaURL.trim(),
          cycleTime: cycleTime,
          frameHeight: frameHeight
        },
      }),
    }).then((response) => {
      Router.push('/admin')
      onClose()
    })
  }

  const handleReset = () => {
    setTabTitle('')
    setKibanaURL('')
    setFrameHeight('')
    setCycleTime(10)
  }

  const invalidTitle = tabData.some((tab) => tab.title == tabTitle.trim())

  return (
    <form id="newTab">
      <ModalBody>
        <Stack spacing={5}>
          <FormControl isRequired isInvalid={invalidTitle}>
            <FormLabel htmlFor="tabTitle">Tab Title</FormLabel>
            <Input
              id="tabTitle"
              placeholder="Tab1"
              value={tabTitle}
              onChange={(e) => setTabTitle(e.target.value)}
              size="lg"
            />
            <FormErrorMessage>{'This title already exists'}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="kibanaURL">Kibana URL</FormLabel>
            <Input
              id="kibanaURL"
              placeholder="http://hostName:5601/restofURL"
              value={kibanaURL}
              onChange={(e) => setKibanaURL(e.target.value)}
            />
            <FormHelperText id="kibanaURL-helper-text">Instructions to grab Kibana URL</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="kibanaURL">Cycle Time</FormLabel>
            <NumberInput
              id="cycleTime"
              placeholder="Cycle Time"
              value={cycleTime}
              min={1}
              onChange={setCycleTime}
              size="md"
            />
            <FormHelperText id="cycleTime-helper-text">In Seconds</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="kibanaURL">Dashboard Height</FormLabel>
            <Input
              id="frameHeight"
              placeholder="950px"
              value={frameHeight}
              onChange={(e) => setFrameHeight(e.target.value)}
            />
          </FormControl>
        </Stack>
      </ModalBody>

      <ModalFooter>
        <Button variantColor="blue" mr={3} onClick={handleReset}>
          Reset
        </Button>
        <Button isDisabled={submitDisabled} onClick={handleSubmit}>
          Save Tab
        </Button>
      </ModalFooter>
    </form>
  )
}
