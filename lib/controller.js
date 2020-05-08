const dataHandler = require("./dataHandler")

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
    data = dataHandler.add("tabs", tab)
  }
  return { tabs: data, code: 200 }
}

export function addTemplate(template) {
  let data = getTemplates()
  if (data.some(({ name }) => name === template.name)) {
    return { templates: data, code: 409 }
  } else {
    data = dataHandler.add("templates", template)
  }
  return { templates: data, code: 200 }
}
