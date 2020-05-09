import { getTemplates, addTemplate } from '../../lib/controller'
import { runMiddleware } from '../../lib/middleware'
const morgan = require('morgan')

export default async (req, res) => {
  await runMiddleware(req, res, morgan('tiny'))
  switch (req.method) {
    case 'GET':
      const allTemplates = getTemplates()
      if (allTemplates.length) {
        res.statusCode = 200
        res.json(allTemplates)
      } else {
        res.statusCode = 404
        res.json({ message: 'No Templates' })
      }
      break
    case 'POST':
      const { templates, code } = addTemplate(req.body)
      res.statusCode = code
      res.json(templates)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
