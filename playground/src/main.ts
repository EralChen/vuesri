import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import './styles'

createApp(App)
  .use(store, key)
  .use(router)
  .component('SvgIcon', SvgIcon)
  .mount('#app')
