import Router from 'next/router'
import {getTabs, getTemplates} from '../lib/controller' 

export default function ({tabs, templates}) {
  React.useEffect(() => {
    if (!tabs.length) {
      Router.push('/admin')
    }
  }) 
  return (<div className="container">
    { tabs.map((e,i) => <div key={i}> {e.name} </div>)}
  </div>)
}

export async function getServerSideProps() {
  const tabs = getTabs()
  const templates = getTemplates()
  return { props: {tabs, templates}}
}