const path = require('path')
const fs = require('fs')

const dataPath = path.join(process.cwd(), 'data/data.json')

export function getAllData() {
  try {
    const data = fs.readFileSync(dataPath)
    return JSON.parse(data)
  } catch (err) {
    return { 'tabs': [], 'templates': [] }
  }
}

export async function add(field, fieldData) {
  let data = getAllData()
  data[field].push(fieldData)
  let fileData = JSON.stringify(data, null, 2)
  fs.writeFile(dataPath, fileData, (err) => {
    if (err) console.error(err)
  })
  return data[field]
}