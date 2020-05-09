import { getTabs, getTemplates } from '../lib/controller'

export default function ({ tabs, templates }) {
  return (
    <div className="container">
      <div>
        Tabs :
        {tabs.map((e, i) => <div key={i}> {e.name} </div>)}
      </div>
      <div>
        Templates
        {templates.map((e, i) => <div key={i}> {e.name} </div>)}
      </div>
      <div>
        Add New Tab
      </div>
    </div>)
}

export async function getServerSideProps() {
  const tabs = getTabs()
  const templates = getTemplates()
  return { props: { tabs, templates } }
}