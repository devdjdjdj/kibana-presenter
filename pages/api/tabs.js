import { getTabs } from '../../lib/controller'
import {runMiddleware } from '../../lib/middleware'
const morgan = require('morgan');

export default async (req, res) => {
  await runMiddleware(req, res, (morgan('tiny')))
  const tabs = getTabs()
  if (tabs.length) {
    res.statusCode = 200
    res.json(tabs)
  } else {
    res.statusCode = 404
    res.json({ 'message': "No Tabs" })
  }
}
