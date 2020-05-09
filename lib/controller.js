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
  if (data.some(({ name }) => name === tab.name)) {
    return { tabs: data, code: 409 }
  } else {
    data = dataHandler.add('tabs', tab)
  }
  return { tabs: data, code: 200 }
}

export function removeTab(tab) {
  let data = getTabs()
  if (data.some(({ name }) => name === tab.name)) {
    data = dataHandler.remove('tabs', tab.name)
  } else {
    return { tabs: data, code: 204 }
  }
  return { tabs: data, code: 200 }
}

export function addTemplate(template) {
  let data = getTemplates()
  if (data.some(({ name }) => name === template.name)) {
    return { templates: data, code: 409 }
  } else {
    data = dataHandler.add('templates', template)
  }
  return { templates: data, code: 200 }
}

export function removeTemplate(template) {
  let data = getTemplates()
  if (data.some(({ name }) => name === template.name)) {
    data = dataHandler.remove('templates', template.name)
  } else {
    return { templates: data, code: 204 }
  }
  return { templates: data, code: 200 }
}
