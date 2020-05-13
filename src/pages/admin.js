import { getData } from '../lib/controller'
import { NewTabForm } from '../components/newTabForm'
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
} from '@chakra-ui/core'

export default ({ data }) => {
  return (
    <Grid templateColumns="1fr 8fr 1fr" templateRows="1fr 10fr">
      {/* prettier-ignore */}
      <Box gridColumn={2} gridRow={2} m={5} p={5} border="1px" borderRadius={10}>
        <Grid templateColumns="4fr 1fr"> 
          <Heading my={1} pb={2} gridColumn={1}>
            Admin Console
          </Heading>
          <NewTabForm tabs={data.tabs}/>
        </Grid>
        <Divider />
        <Stack>
          {data.tabs.map((e, i) => (
            <TabDataContainer key={i} title={e.title} data={e.data} />
          ))}
        </Stack>
      </Box>
    </Grid>
  )
}

const TabDataContainer = ({ title, data }) => {
  return (
    <>
      <Box border="1px" borderRadius={5} m={2} p={2}>
        <Box alignItems="center">
          <TabData title={title} data={data} />
        </Box>
      </Box>
    </>
  )
}

const TabData = ({ title, data }) => {
  const [showTabData, setShowData] = React.useState(false)
  const [deleteDialogIsOpen, setDeleteDialogIsOpen] = React.useState(false)
  const [scrollTime, setScrollTime] = React.useState(data.scrollTime)
  const [kibanaURL, setKibanaURL] = React.useState(data.kibanaURL)
  const cancelRef = React.useRef()

  const closeDeleteDialog = () => setDeleteDialogIsOpen(false)
  const toggleShowData = () => setShowData(!showTabData)
  const handleDeleteButton = () => setDeleteDialogIsOpen(true)
  const handleDeleteDialogButton = (e) => {
    console.log(`Delete ${title}`)
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
      console.log(response)
      Router.push('/admin')
      closeDeleteDialog()
    })
  }

  return (
    <>
      <Grid templateColumns="12fr 1fr 1fr">
        <Box m="2">
          <Heading size="lg">{title}</Heading> 
        </Box>
        <IconButton
          icon={showTabData ? 'view-off' : 'edit'}
          ml="5"
          display="flex"
          variantColor="teal"
          variant="outline"
          onClick={toggleShowData}/>
        <IconButton
          icon="delete"
          ml="5"
          display="flex"
          variantColor="red"
          onClick={handleDeleteButton}
          />
      </Grid>

      <Collapse mt={4} isOpen={showTabData}>
        <Divider />
        <Stack>
          <Box>
            <Grid templateColumns="1fr 3fr">
              <Box gridColumn={1} justifySelf="center">Kibana URL :</Box>
              <Input gridColumn={2} value={kibanaURL} onChange={setKibanaURL}/>
            </Grid>
          </Box>
          <Box>
            <Grid templateColumns="1fr 3fr">
              <Box gridColumn={1} justifySelf="center">Scroll Time :</Box>
              <NumberInput gridColumn={2} value={scrollTime} onChange={setScrollTime}/>
            </Grid>
          </Box>
        </Stack>
      </Collapse>

      <AlertDialog
        isOpen={deleteDialogIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={closeDeleteDialog}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Tab
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={closeDeleteDialog}>
              Cancel
            </Button>
            <Button
              variantColor="red"
              onClick={handleDeleteDialogButton}
              ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export async function getServerSideProps() {
  const data = getData()
  return { props: { data } }
}
