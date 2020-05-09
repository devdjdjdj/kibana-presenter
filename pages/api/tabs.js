import { getTabs, addTab } from '../../lib/controller'
import { runMiddleware } from '../../lib/middleware'
const morgan = require('morgan')

export default async (req, res) => {
  await runMiddleware(req, res, morgan('tiny'))
  switch (req.method) {
    case 'GET':
      const allTabs = getTabs()
      if (allTabs.length) {
        res.statusCode = 200
        res.json(allTabs)
      } else {
        res.statusCode = 404
        res.json({ message: 'No Tabs' })
      }
      break
    case 'POST':
      const { tabs, code } = addTab(req.body)
      res.statusCode = code
      res.json(tabs)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
