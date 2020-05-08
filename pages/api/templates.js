import { getTemplates } from '../../lib/controller'
import {runMiddleware } from '../../lib/middleware'
const morgan = require('morgan');

export default async (req, res) => {
  await runMiddleware(req, res, (morgan('tiny')))
  const templates = getTemplates()
  if (templates.length) {
    res.statusCode = 200
    res.json(templates)
  } else {
    res.statusCode = 404
    res.json({ 'message': "No Templates" })
  }
}
