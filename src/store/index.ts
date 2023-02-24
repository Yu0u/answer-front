import { createPinia } from 'pinia'
import { useCountStrore } from './modules/count'
const store = createPinia()

export default store
export { useCountStrore }
