const path = require('path')
const fs = require('fs')

const dataPath = path.join(process.cwd(), 'data/data.json')

function putAllData(data) {
  let fileData = JSON.stringify(data, null, 2)
  fs.writeFile(dataPath, fileData, (err) => {
    if (err) console.error(err)
  })
}

export function getAllData() {
  try {
    const data = fs.readFileSync(dataPath)
    return JSON.parse(data)
  } catch (err) {
    return { tabs: [], templates: [], settings: {} }
  }
}

export function add(field, fieldData) {
  let data = getAllData()
  data[field].push(fieldData)
  putAllData(data)
  return data[field]
}

export function edit(field, fieldData, currentTitle=null) {
  let data = getAllData()
  if(data[field] instanceof Array) {
    let position = data[field].findIndex(({ title }) => title === currentTitle)
    data[field][position] = fieldData
  } else {
    data[field] = fieldData
  }
  putAllData(data)
  return data[field]
}

export function remove(field, objectTitle) {
  let data = getAllData()
  let position = data[field].findIndex(({ title }) => title === objectTitle)
  data[field].splice(position, 1)
  putAllData(data)
  return data[field]
}
