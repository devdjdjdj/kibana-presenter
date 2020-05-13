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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/core'

export default ({ data }) => {
  return (
    <Grid templateColumns="1fr 8fr 1fr" templateRows="1fr 10fr">
      {/* prettier-ignore */}
      <Box gridColumn={2} gridRow={2} m={5} p={5} border="1px" borderRadius={10}>
        <Heading my={1} pb={2}>
          Admin Console
        </Heading>
        <Divider />
        <NewTabForm tabs={data.tabs}/>
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
      <Grid templateColumns="4fr 1fr 1fr">
        <Box m="2"> {title} </Box>
        <Button
          ml="5"
          display="flex"
          variantColor="blue"
          onClick={toggleShowData}>
          {showTabData ? 'Collapse' : 'Expand'}
        </Button>
        <Button
          ml="5"
          display="flex"
          variantColor="red"
          onClick={handleDeleteButton}>
          Delete
        </Button>
      </Grid>

      <Collapse mt={4} isOpen={showTabData}>
        <Divider />
        {JSON.stringify(data)}
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
