import { loadSettings, editSettings } from '../../lib/controller'
import { runMiddleware } from '../../lib/middleware'
const morgan = require('morgan')

export default async (req, res) => {
  await runMiddleware(req, res, morgan('tiny'))
  switch (req.method) {
    case 'GET':
      const settings = loadSettings()
      res.statusCode = 200
      res.json(settings)
      break
    case 'PUT': {
      const { settings, code } = editSettings(req.body)
      res.statusCode = code
      res.json(settings)
      break
    }
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
