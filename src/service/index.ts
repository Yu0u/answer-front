import Request from './request'
import { AxiosResponse } from 'axios'

import type { RequestConfig } from './request/types'

export interface GLXResponse<T> {
  code: number
  msg: string
  data: T
}

interface GLXRequestConfig<T, R> extends RequestConfig<GLXResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptors: config => config,
    responseInterceptors: (result: AxiosResponse) => {
      return result
    },
  },
})

const glxRequest = <D = any, T = any>(config: GLXRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<GLXResponse<T>>(config)
}

export default glxRequest
