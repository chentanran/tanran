import { AxiosRequestConfig } from './type'

const defaults: AxiosRequestConfig = {
  method: 'get',

  timeout: 0,

  header: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
}

const methodsNoData = ['delete', 'get', 'head', 'options']

methodsNoData.forEach(method => {
  defaults.header[method] = {}
})

const methodsWithData = ['post', 'put', 'patch']

methodsWithData.forEach(method => {
  defaults.header[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults