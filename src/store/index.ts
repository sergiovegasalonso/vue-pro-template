import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        counter: 10,
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
})
