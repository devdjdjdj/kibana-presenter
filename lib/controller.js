const path =  require('path')
const fs = require('fs')

const dataPath = path.join(process.cwd(), 'data/data.json')


export function getData() {
  try {
    const data = fs.readFileSync(dataPath) 
    return JSON.parse(data)
  } catch (err) {
    return null
  }
}

export function addApp(appData) {
  let data = getData() ? getData() : []
  data =  JSON.stringify([...data, appData])
  fs.writeFile(dataPath, data, (err) => {
    if (err) console.error(err)
    console.log('Data written to file')
  })

  return data
}