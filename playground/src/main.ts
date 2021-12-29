import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import './styles'

createApp(App)
  .use(router)
  .use(store)
  .component('SvgIcon', SvgIcon)
  .mount('#app')
