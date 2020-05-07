import { getData } from '../../lib/controller'

export default (req, res) => {
  const data = getData()
  console.log(data)
  if (data) {
    res.statusCode = 200
    res.json(data)
  } else {
    res.statusCode = 404
    res.json({ 'message' : "No App data"})
  }
}
