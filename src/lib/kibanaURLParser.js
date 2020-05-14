export function parseURL(src) {
  let url = src.split('?_g')[0]
  // console.log('\n\nURL : ' + url + "\n\n")
  src = src.split('&_a')[1]
  // console.log(" SRC : " + src)
  let filters = src.split('filters:')[1].split(',fullScreenMode')[0]
  // console.log('Filters: ' + filters)
  let panels = src.split('panels:')[1].split(',query')[0]
  // console.log('Panels: ' + panels)
  let query =
    '(l' +
    src.split('panels:')[1].split(',query:(l')[1].split(',timeRestore')[0]
  // console.log('Query: ' + query)
  let result = getResult(url, filters, panels, query)
  // console.log(result)
  return result
}

function getResult(url, filters, panels, query) {
  let result =
    url +
    '?embed=true&_g=(refreshInterval:(pause:!f,value:300000),time:(from:now-7d,mode:quick,to:now))' +
    getAdditionalInfo(filters, query, panels)
  return result
}

function getAdditionalInfo(filters, query, panels) {
  let result = "&_a=(description:''"
  if (!isNullOrUndefined(filters)) result = result + ',filters:' + "''" //filters
  if (!isNullOrUndefined(query)) result = result + ',query:' + "''" //query
  if (!isNullOrUndefined(panels)) result = result + ',panels:' + panels
  result = result + ',timeRestore:!f,viewMode:view)'
  return result
}
const isNullOrUndefined = (arg) => {
  return arg === null || arg === undefined
}
