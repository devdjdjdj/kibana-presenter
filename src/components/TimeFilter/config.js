const quickRanges = [
  { from: 'now-4h', to: 'now/m', display: 'Last 4 hours', section: 0 },
  { from: 'now-8h', to: 'now/m', display: 'Last 8 hours', section: 0 },
  { from: 'now-12h', to: 'now/m', display: 'Last 12 hours', section: 0 },
  { from: 'now-24h', to: 'now/m', display: 'Last 24 hours', section: 0 },
  { from: 'now-48h', to: 'now/h', display: 'Last 48 hours', section: 0 },
  { from: 'now-72h', to: 'now/h', display: 'Last 72 hours', section: 0 },

  { from: 'now-7d', to: 'now/d', display: 'Last 7 days', section: 1 },
  { from: 'now-30d', to: 'now/d', display: 'Last 30 days', section: 1 },
  { from: 'now-60d', to: 'now/d', display: 'Last 60 days', section: 1 },
  { from: 'now-90d', to: 'now/d', display: 'Last 90 days', section: 1 },
  { from: 'now-6M', to: 'now', display: 'Last 6 months', section: 1 },
  { from: 'now-1y', to: 'now', display: 'Last 1 year', section: 1 },

  { from: 'now/d', to: 'now', display: 'Today', section: 2 },
  { from: 'now-1d/d', to: 'now-1d/d', display: 'Yesterday', section: 2 },
  { from: 'now/w', to: 'now/w', display: 'This week', section: 2 },
  { from: 'now/M', to: 'now/M', display: 'This month', section: 2 },
  { from: 'now/y', to: 'now/y', display: 'This year', section: 2 },

  { from: 'now-1w/w', to: 'now-1w/w', display: 'Previous week', section: 3 },
  { from: 'now-1M/M', to: 'now-1M/M', display: 'Previous month', section: 3 },
  { from: 'now-1y/y', to: 'now-1y/y', display: 'Previous year', section: 3 },
  { from: 'now-1y', to: 'now', display: 'Last 1 year', section: 3 },
  { from: 'now-2y', to: 'now', display: 'Last 2 years', section: 3 },
  { from: 'now-5y', to: 'now', display: 'Last 5 years', section: 3 },
]

export default quickRanges
