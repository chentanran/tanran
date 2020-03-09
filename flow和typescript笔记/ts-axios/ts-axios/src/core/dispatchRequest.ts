import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../type/index'
import xhr from './xhr/index'
import { buildURL } from '../helpers/url'
import { dataRequest } from '../helpers/dataRequest'
import { processHeaders } from '../helpers/header'
import { transformData } from '../helpers/utils'

export default function dispatchRequest(config:AxiosRequestConfig):AxiosPromise {
 // TODO
 processConfig(config)
 return xhr(config).then(res => {
   return transformResponseData(res)
 })
}

function processConfig(config:AxiosRequestConfig):void {
  config.header = transformHeader(config)
  config.url = transformURL(config)
  config.data = transformRequest(config)
}

function transformURL(config:AxiosRequestConfig):string {
  const {url, params} = config
  return buildURL(url!, params)
}

function transformRequest(config:AxiosRequestConfig):void {
  return dataRequest(config.data)
}

function transformHeader(config:AxiosRequestConfig):string {
  const { header = {}, data } = config
   return processHeaders(header, data)
}

function transformResponseData(res:AxiosResponse):AxiosResponse {
  res.data = transformData(res.data)
  return res
}
