import { addApp } from '../../lib/controller'

export default (req, res) => {
  const data = addApp(2)
  if (data) {
    res.statusCode = 200
    res.json(data)
  } else {
    res.statusCode = 404
    res.json({ 'message' : "No App data"})
  }
}
