import { getTabs, getTemplates } from '../lib/controller'
import {
  Heading,
  Stack,
  Box,
  Divider,
  Button,
  Collapse,
  Flex,
  SimpleGrid,
  Grid,
} from '@chakra-ui/core'

export default ({ tabs, templates }) => {
  return (
    <Box m={5} p={5} border="1px" borderRadius={10}>
      <Heading my={1} pb={2}>
        Admin Console
      </Heading>
      <Divider />
      <Stack>
        {tabs.map((e, i) => (
          <TabBox key={i} name={e.name} data={e.data} />
        ))}
      </Stack>
    </Box>
  )
}

const TabBox = ({ name, data }) => {
  return (
    <>
      <Box border="1px" borderRadius={5} m={2} p={2}>
        <Box alignItems="center">
          <Example name={name} data={data} />
        </Box>
      </Box>
    </>
  )
}

function Example({ name, data }) {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <>
      <Grid templateColumns="7fr 1fr 1fr">
        {name}
        <Button  ml="5" display="flex" variantColor="blue"  onClick={handleToggle}> Edit </Button>
        <Button  ml="5" display="flex" variantColor="red" onClick={handleToggle}> Delete </Button>
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
  const tabs = getTabs()
  const templates = getTemplates()
  return { props: { tabs, templates } }
}
