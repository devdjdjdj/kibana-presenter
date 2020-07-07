export function getSrc(tab, time) {
  return createSrc(tab.data.kibanaURL, time)
}

function createSrc(kibanaURL, time) {
  let url = getURL(kibanaURL)
  let timeQuery = getTimeQuery(time)
  return url + timeQuery
}

function getURL(url) {
  url = url.split('?_g')[0]
  return url
}

function getTimeQuery(time) {
  return (
    '?embed=true&_g=(refreshInterval:(pause:!f,value:300000),time:(from:' +
    time.from +
    ',mode:' +
    time.mode +
    ',to:' +
    time.to +
    '))'
  )
}
