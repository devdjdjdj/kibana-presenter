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
  if (data.some(({ title }) => title === tab.title)) {
    return { tabs: data, code: 409 }
  } else {
    data = dataHandler.add('tabs', tab)
  }
  return { tabs: data, code: 200 }
}

export function removeTab(tab) {
  let data = getTabs()
  if (data.some(({ title }) => title === tab.title)) {
    data = dataHandler.remove('tabs', tab.title)
  } else {
    return { tabs: data, code: 204 }
  }
  return { tabs: data, code: 200 }
}

export function addTemplate(template) {
  let data = getTemplates()
  if (data.some(({ title }) => title === template.title)) {
    return { templates: data, code: 409 }
  } else {
    data = dataHandler.add('templates', template)
  }
  return { templates: data, code: 200 }
}

export function removeTemplate(template) {
  let data = getTemplates()
  if (data.some(({ title }) => title === template.title)) {
    data = dataHandler.remove('templates', template.title)
  } else {
    return { templates: data, code: 204 }
  }
  return { templates: data, code: 200 }
}
