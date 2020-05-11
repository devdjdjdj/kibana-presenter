Creating this file so that git can track this folder while ignoreing data.json.
This is where your json data is stored.

data.json
  title
  defaultTab
  scrollTime
  tabs [
    {
      name string
      src string
      scrollTime int (seconds) 
      kibana*
        filter*
        query*
      time*
        show bool*
        default timeKeeperObj*
    }
  ]
  templates
