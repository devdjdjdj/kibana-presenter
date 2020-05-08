import { addTab } from '../../lib/controller'
import {runMiddleware } from '../../lib/middleware'
const morgan = require('morgan');

export default async (req, res) => {
  await runMiddleware(req, res, (morgan('tiny')))
  const { tabs, code } = addTab(req.body)
  res.statusCode = code
  res.json(tabs)
}