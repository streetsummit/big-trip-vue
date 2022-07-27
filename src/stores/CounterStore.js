import { defineStore } from 'pinia'

export const useCounterStore = defineStore('CounterStore', {
  state: () => ({ count: 0 }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
