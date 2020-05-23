const quickRanges = [
  { from: 'now/d', to: 'now-1h/m', display: 'Today', section: 0 },
  { from: 'now/w', to: 'now-1h/w', display: 'This week', section: 0 },
  { from: 'now/M', to: 'now-1h/M', display: 'This month', section: 0 },
  { from: 'now/y', to: 'now/y', display: 'This year', section: 0 },
  { from: 'now/d', to: 'now-1h/d', display: 'This day', section: 0 },
  { from: 'now/w', to: 'now-1h/m', display: 'Week to date', section: 0 },
  { from: 'now/M', to: 'now-1h/m', display: 'Month to date', section: 0 },
  { from: 'now/y', to: 'now', display: 'Year to date', section: 0 },

  { from: 'now-1d/d', to: 'now-1d/d', display: 'Yesterday', section: 1 },
  { from: 'now-2d/d', to: 'now-2d/d', display: 'Day before yesterday', section: 1 },
  { from: 'now-7d/d', to: 'now-7d/d', display: 'This day last week', section: 1 },
  { from: 'now-1w/w', to: 'now-1w/w', display: 'Previous week', section: 1 },
  { from: 'now-1M/M', to: 'now-1M/M', display: 'Previous month', section: 1 },
  { from: 'now-1y/y', to: 'now-1y/y', display: 'Previous year', section: 1 },


  { from: 'now-5h', to: 'now-1h/m', display: 'Last 4 hours', section: 2 },
  { from: 'now-9h', to: 'now-1h/m', display: 'Last 8 hours', section: 2 },
  { from: 'now-13h', to: 'now-1h/m', display: 'Last 12 hours', section: 2 },
  { from: 'now-25h', to: 'now-1h/m', display: 'Last 24 hours', section: 2 },
  { from: 'now-49h', to: 'now-1h/h', display: 'Last 48 hours', section: 2 },

  { from: 'now-7d', to: 'now-1h/m', display: 'Last 7 days', section: 3 },
  { from: 'now-14d', to: 'now-1h/m', display: 'Last 14 days', section: 3 },
  { from: 'now-30d', to: 'now-1h/m', display: 'Last 30 days', section: 3 },
  { from: 'now-60d', to: 'now-1h/m', display: 'Last 60 days', section: 3 },
  { from: 'now-90d', to: 'now', display: 'Last 90 days', section: 3 },
  { from: 'now-6M', to: 'now', display: 'Last 6 months', section: 3 },
  { from: 'now-1y', to: 'now', display: 'Last 1 year', section: 3 },
  { from: 'now-2y', to: 'now', display: 'Last 2 years', section: 3 },
  { from: 'now-5y', to: 'now', display: 'Last 5 years', section: 3 }
];

export default quickRanges