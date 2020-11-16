const dataHandler = require('./dataHandler')

export function loadData() {
  return dataHandler.getAllData()
}

export function loadTabs() {
  return dataHandler.getAllData().tabs || []
}

export function loadTemplates() {
  return dataHandler.getAllData().templates || []
}

export function loadSettings() {
  return dataHandler.getAllData().settings || {}
}

export function addTab(tab) {
  let data = loadTabs()
  if (data.some(({ title }) => title === tab.title)) {
    return { tabs: data, code: 409 }
  } else {
    data = dataHandler.add('tabs', tab)
  }
  return { tabs: data, code: 201 }
}

export function editTab(tabTitle, tabData) {
  let data = loadTabs()
  if (data.some(({ title }) => title === tabTitle)) {
    data = dataHandler.edit('tabs', tabData, tabTitle)
  } else {
    return { tabs: data, code: 404 }
  }
  return { tabs: data, code: 201 }
}

export function removeTab(tab) {
  let data = loadTabs()
  if (data.some(({ title }) => title === tab.title)) {
    data = dataHandler.remove('tabs', tab.title)
  } else {
    return { tabs: data, code: 204 }
  }
  return { tabs: data, code: 200 }
}

export function addTemplate(template) {
  let data = loadTemplates()
  if (data.some(({ title }) => title === template.title)) {
    return { templates: data, code: 409 }
  } else {
    data = dataHandler.add('templates', template)
  }
  return { templates: data, code: 201 }
}

export function removeTemplate(template) {
  let data = loadTemplates()
  if (data.some(({ title }) => title === template.title)) {
    data = dataHandler.remove('templates', template.title)
  } else {
    return { templates: data, code: 204 }
  }
  return { templates: data, code: 200 }
}

export function editSettings(settingsData) {
  let data = dataHandler.edit('settings', settingsData)
  return { settings: data, code: 200 };
}