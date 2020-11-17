import Router from 'next/router'
import {
  Heading,
  Stack,
  Box,
  Divider,
  Button,
  Collapse,
  Grid,
  Input,
  NumberInput,
  FormControl,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
} from '@chakra-ui/core'

export function TabData({ index, title, data, allTabs }) {
  const [showTabData, setShowData] = React.useState(false)
  const [deleteDialogIsOpen, setDeleteDialogIsOpen] = React.useState(false)
  const [cycleTime, setCycleTime] = React.useState(data.cycleTime)
  const [frameHeight, setFrameHeight] = React.useState(data.frameHeight);
  const [newTitle, setNewTitle] = React.useState(title)
  const [invalidTitle, setInvalidTitle] = React.useState(false)
  const [kibanaURL, setKibanaURL] = React.useState(data.kibanaURL)
  const cancelRef = React.useRef()
  const saveIsVisible = !(title === newTitle.trim() && data.kibanaURL === kibanaURL.trim() && data.cycleTime == cycleTime && data.frameHeight == frameHeight)

  const saveIsDisabled = newTitle.trim().length <= 0 || kibanaURL.trim().length <= 0 || invalidTitle

  const closeDeleteDialog = () => setDeleteDialogIsOpen(false)
  const toggleShowData = () => setShowData(!showTabData)
  const handleDeleteButton = () => setDeleteDialogIsOpen(true)
  const handleDeleteDialogButton = (e) => {
    fetch('/api/tabs', {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
      }),
    }).then((response) => {
      Router.push('/admin')
      closeDeleteDialog()
    })
  }
  const handleResetButton = () => {
    setCycleTime(data.cycleTime)
    setNewTitle(title)
    setKibanaURL(data.kibanaURL)
  }
  const handleSaveButton = () => {
    fetch('/api/tabs', {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tabTitle: title.trim(),
        tabData: {
          title: newTitle.trim(),
          data: {
            kibanaURL: kibanaURL.trim(),
            cycleTime: cycleTime,
            frameHeight: frameHeight
          },
        },
      }),
    }).then((response) => {
      Router.push('/admin')
    })
  }
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value)
    let titleIndex = allTabs.findIndex((tab) => tab.title === e.target.value)
    setInvalidTitle(titleIndex != -1 && titleIndex != index)
  }

  return (
    <>
      <Grid templateColumns="12fr 1fr 1fr">
        <Box m="2">
          <Heading size="lg">{newTitle}</Heading>
        </Box>
        <IconButton
          icon={showTabData ? 'view-off' : 'edit'}
          ml="5"
          size="lg"
          display="flex"
          variantColor="teal"
          variant="outline"
          onClick={toggleShowData}
        />
        <IconButton icon="delete" ml="5" size="lg" display="flex" variantColor="red" onClick={handleDeleteButton} />
      </Grid>

      <Collapse mt={4} isOpen={showTabData}>
        <Divider />
        <Stack>
          <Box>
            <Grid templateColumns="1fr 3fr">
              <Box mt={2} mr={5} gridColumn={1} justifySelf="right">
                Tab Title:
              </Box>
              <FormControl isRequired isInvalid={invalidTitle}>
                <Input gridColumn={2} value={newTitle} onChange={handleTitleChange} />
              </FormControl>
            </Grid>
          </Box>
          <Box>
            <Grid templateColumns="1fr 3fr">
              <Box mt={2} mr={5} gridColumn={1} justifySelf="right">
                Kibana URL:
              </Box>
              <Input gridColumn={2} value={kibanaURL} onChange={(e) => setKibanaURL(e.target.value)} />
            </Grid>
          </Box>
          <Box>
            <Grid templateColumns="1fr 3fr">
              <Box mt={2} mr={5} gridColumn={1} justifySelf="right">
                Cycle Time:
              </Box>
              <NumberInput gridColumn={2} min={1} value={cycleTime} onChange={setCycleTime} />
            </Grid>
          </Box>

          <Box>
            <Grid templateColumns="1fr 3fr">
              <Box mt={2} mr={5} gridColumn={1} justifySelf="right">
                Dashboard Height:
              </Box>
              <Input gridColumn={2} placeholder="950px" value={frameHeight} onChange={(e) => setFrameHeight(e.target.value)} />
            </Grid>
          </Box>
        </Stack>
        <Collapse mt={5} isOpen={saveIsVisible} textAlign="right">
          <IconButton mr={5} size="lg" icon="repeat" onClick={handleResetButton} />
          <Button mr={5} align="right" variantColor="teal" onClick={handleSaveButton} isDisabled={saveIsDisabled}>
            Save
          </Button>
        </Collapse>
      </Collapse>

      <AlertDialog isOpen={deleteDialogIsOpen} leastDestructiveRef={cancelRef} onClose={closeDeleteDialog}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete {title}
          </AlertDialogHeader>
          <AlertDialogBody>Are you sure? You can't undo this.</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={closeDeleteDialog}>
              Cancel
            </Button>
            <Button variantColor="red" onClick={handleDeleteDialogButton} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
