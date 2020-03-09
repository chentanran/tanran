import { AxiosRequestConfig, AxiosResponse, AxiosPromise } from '../../type/index'
import { parseHeaders } from '../../helpers/utils'
import { createError } from '../../helpers/error'
 
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', header, responseType, timeout } = config
    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
    }

    request.open(method.toLocaleUpperCase(), url!, true)

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      const responseheaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseheaders,
        config,
        request
      }
      handleReaponse(response)
    }

    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }

    request.ontimeout = function handleTimeOut() {
      reject(createError(`Timeout of ${timeout} ms exceeded`, config, null, request))
    }

    Object.keys(header).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete header[name]
      } else {
        request.setRequestHeader(name, header[name])
      }
    })

    request.send(data)

    function handleReaponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(createError(`Request failed with status code ${response.status}`, config, null, request, response))
      }
    }
  })
}