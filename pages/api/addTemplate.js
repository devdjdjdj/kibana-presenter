import { addTemplate } from '../../lib/controller'
import {runMiddleware } from '../../lib/middleware'
const morgan = require('morgan');

export default async (req, res) => {
  await runMiddleware(req, res, (morgan('tiny')))
  const { templates, code } = addTemplate(req.body)
  res.statusCode = code
  res.json(templates)
}