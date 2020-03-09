import { 
  AxiosRequestConfig,
  AxiosResponse, 
  AxiosPromise, 
  Method, 
  ResolvedFn, 
  RejectFn} from "../type";
import dispatchRequest from './dispatchRequest'
import InterceptorManager from "./interceptorManager"

interface Interceptors {
  request: InterceptorManager<AxiosRequestConfig>
  response: InterceptorManager<AxiosResponse>
}

interface PromiseChain<T> {
  resolved: ResolvedFn<T> | ((config: AxiosRequestConfig)=>AxiosPromise),
  rejected?: RejectFn
}

export default class Axios {
  defaults: AxiosRequestConfig
  interceptors: Interceptors

  constructor(init: AxiosRequestConfig) {
    this.defaults = init
    this.interceptors = {
      request: new InterceptorManager<AxiosRequestConfig>(),
      response: new InterceptorManager<AxiosResponse>()
    }
  }

  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }

    const chain: PromiseChain<any>[] = [{
       resolved: dispatchRequest,
       rejected: undefined
    }]

    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor)
    })

    this.interceptors.response.forEach(interceptor => {
      chain.push(interceptor)
    })

    let promise = Promise.resolve(config)

    while(chain.length) {
      const { resolved, rejected } = chain.shift()!
      promise = promise.then(resolved, rejected)
    }

    // return dispatchRequest(config)
    return promise
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWidthoutData('get', url, config)
  }
  
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWidthoutData('get', url, config)
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWidthoutData('get', url, config)
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWidthoutData('get', url, config)
  }

  post(url: string, config?: AxiosRequestConfig, data?:any): AxiosPromise {
    return this._requestMethodWidthData('post', url, data, config)
  }

  put(url: string, config?: AxiosRequestConfig, data?:any): AxiosPromise {
    return this._requestMethodWidthData('put', url, data, config)
  }

  patch(url: string, config?: AxiosRequestConfig, data?:any): AxiosPromise {
    return this._requestMethodWidthData('patch', url, data, config)
  }

  _requestMethodWidthoutData(method: Method, url: string, config?:AxiosRequestConfig):AxiosPromise {
    return this.request(Object.assign(config||{}, {method, url}))
  }

  _requestMethodWidthData(method: Method, url: string, data?: any, config?:AxiosRequestConfig):AxiosPromise {
    return this.request(Object.assign(config||{}, {method, url, data}))
  }
}