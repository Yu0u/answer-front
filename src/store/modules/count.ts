import { defineStore } from 'pinia'
import type { CountInterface } from './types'
export const useCountStrore = defineStore({
  id: 'count',
  state: (): CountInterface => {
    return {
      count: 0,
    }
  },
  getters: {
    doubleCount: state => {
      return state.count * 2
    },
  },
  actions: {
    countAdd() {
      this.count++
    },
    countReduce() {
      this.count--
    },
  },
})
