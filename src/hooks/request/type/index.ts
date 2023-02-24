import type { Ref } from 'vue'
export interface IUseRequestOption<T = any> {
  debounce?: boolean
  debounceInterval?: number

  throttle?: boolean
  throttleInterval?: number

  polling?: boolean
  pollingInterval?: number

  autoRun?: boolean
  onFinish?: (data: T) => void
}

export interface IUseRequestRequest<D, T> {
  loading: Ref<boolean>
  data: Ref<T | undefined>
  run: (...args: any[]) => Promise<void>
  runParams: (params: D) => Promise<void>
}
export interface IWhyRequest<T> {
  code: number
  data: T
}
