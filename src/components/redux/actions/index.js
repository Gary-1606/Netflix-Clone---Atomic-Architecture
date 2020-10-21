import { AUTHENTICATION } from './types'
import instance from '../../../_config/axios'

export const authentication = (key) => {
  const setAxiosToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `${token}`
    instance.defaults.headers.post['Content-Type'] =
      'application/json; charset=utf-8'
  }
  setAxiosToken(
    'Basic dGVzdHVzZXJAcGFycm90YW5hbHl0aWNzLmNvbTo5M3M1MjI5OEsxYQ==',
  )
  return async (dispatch) => {
    const response = await instance.post('/authenticate')
    dispatch({
      type: AUTHENTICATION,
      payload: response.headers,
    })
  }
}
