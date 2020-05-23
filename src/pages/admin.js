import { getData } from '../lib/controller'
import { NewTabForm } from '../components/NewTabForm'
import { Form } from '../components/NewTabForm/form'
import { TabData } from '../components/TabData'
import { Heading, Stack, Box, Divider, Grid } from '@chakra-ui/core'

export default ({ data, setShowOptions }) => {
  setShowOptions(false)

  return (
    <Grid templateColumns="1fr 8fr 1fr" templateRows="1fr 10fr">
      <Box gridColumn={2} gridRow={2} m={5} p={5} border="1px" borderRadius={10}>
        <Grid templateColumns="4fr 1fr">
          <Heading my={1} pb={2} gridColumn={1}>
            Admin Console
          </Heading>
          <NewTabForm tabs={data.tabs} />
        </Grid>
        <Divider />
        {data.tabs.length == 0 && (
          <Form gridColumn={2} gridRow={2} onClose={() => window.close()} tabData={data.tabs} />
        )}
        <Stack>
          {data.tabs.map((e, index) => (
            <TabDataContainer key={index} index={index} title={e.title} data={e.data} allTabs={data.tabs} />
          ))}
        </Stack>
      </Box>
    </Grid>
  )
}

const TabDataContainer = ({ index, title, data, allTabs }) => {
  return (
    <>
      <Box border="1px" borderRadius={5} m={2} p={2}>
        <Box alignItems="center">
          <TabData index={index} title={title} data={data} allTabs={allTabs} />
        </Box>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  const data = getData()
  return { props: { data } }
}
