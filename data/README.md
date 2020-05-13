Creating this file so that git can track this folder while ignoreing data.json.
This is where your json data is stored.

data.json
  title
  defaultTab
  scrollTime
  tabs [
    {
      title string
      url string
      scrollTime int (seconds)
      
      kibana*
        type
        filter*
        query*
      time*
        show bool*
        default timeKeeperObj*
    }
  ]
  templates
