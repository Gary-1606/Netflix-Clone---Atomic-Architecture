const getShowList = (token, title, market, period) => {
  let data = JSON.stringify({
    interval: 'overall',
    context_metric: 'dexpercapita',
    sort_by: 'dexpercapita',
    query: [
      {
        content: 'allshows',
        markets: market ? market : 'global',
        period: period ? period : 'latest',
        filters: { platform: `${title}` },
      },
    ],
    order: 'desc',
    page: 1,
    size: 10,
  })
  let config = {
    method: 'post',
    url: 'https://tv360api-dev.parrotanalytics.com/v2/rank',
    headers: {
      'X-AUTH-TOKEN': `${token}`,
      'Content-Type': 'application/json',
    },
    data: data,
  }
  return config
}
const getPlatforms = (token) => {
  let config = {
    method: 'get',
    url: 'https://tv360api-dev.parrotanalytics.com/v2/markets/platforms',
    headers: {
      'X-AUTH-TOKEN': `${token}`,
      'Content-Type': 'application/json',
    },
  }
  return config
}
export { getShowList, getPlatforms }
