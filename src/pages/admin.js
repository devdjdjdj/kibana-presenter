import { getData } from '../lib/controller'
import { useState } from 'react'
import { NewTabForm } from '../components/newTabForm'
// prettier-ignore
import { Heading, Stack, Box, Divider, Button, Collapse, Grid } from '@chakra-ui/core'

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
            <TabBox key={i} title={e.title} data={e.data} />
          ))}
        </Stack>
      </Box>
    </Grid>
  )
}

const TabBox = ({ title, data }) => {
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
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <>
      <Grid templateColumns="4fr 1fr 1fr">
        <Box m="2"> {title} </Box>
        {/* prettier-ignore */}
        <Button ml="5" display="flex" variantColor="blue" onClick={handleToggle}> Edit </Button>
        {/* prettier-ignore */}
        <Button ml="5" display="flex" variantColor="red" onClick={handleToggle}> Delete </Button>
      </Grid>

      <Collapse mt={4} isOpen={show}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
    </>
  )
}

export async function getServerSideProps() {
  const data = getData()
  return { props: { data } }
}
