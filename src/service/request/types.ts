import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
  CreateAxiosDefaults,
  AxiosRequestConfig,
} from 'axios'
export interface RequestInterceptors<T> {
  requestInterceptors?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (err: any) => any
}

export interface CreateRequestConfig<T = AxiosResponse>
  extends CreateAxiosDefaults {
  interceptors?: RequestInterceptors<T>
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}

export interface CancelRequestSource {
  [index: string]: () => void
}
