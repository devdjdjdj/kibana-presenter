const dataHandler = require('./dataHandler')

export function getData() {
  return dataHandler.getAllData()
}

export function getTabs() {
  return dataHandler.getAllData().tabs
}

export function getTemplates() {
  return dataHandler.getAllData().templates
}

export function addTab(tab) {
  let data = getTabs()
  if (data.some((e) => tab.name == e.name)) {
    return { 'tabs': data, 'code': 409 }
  } else {
    data = dataHandler.add('tabs', tab)
  }
  return { 'tabs': data, 'code': 200 }
}

export function addTemplate(template) {
  let data = getTemplates()
  if (data.some((e) => template.name == e.name)) {
    return { 'templates': data, 'code': 409 }
  } else {
    data = dataHandler.add('templates', template)
  }
  return { 'templates': data, 'code': 200 }
}

