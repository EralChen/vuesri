import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SvgIcon from '@/components/SvgIcon/index.vue'
import DemoContainer from '../build/markdown/DemoContainer/index.vue'
import SourceContainer from '../build/markdown/SourceContainer/index.vue'
import MdWrapper from '@/components/MdWrapper/index.vue'
import 'virtual:svg-icons-register'
import './styles'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import esriConfig from '@arcgis/core/config'
esriConfig.assetsPath = import.meta.env.VITE_BASE_URL + '/Esri'
esriConfig.apiKey = 'AAPKb14837d0d1fd48c2a9e834966b090d71jkWd8RL_697p0sRB9s87pEWRaefvBwcC_pdbOKwZd3Ka8xiulyqbHPassAKuHBxH'

createApp(App)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(store)
  .component('SvgIcon', SvgIcon)
  .component('DemoContainer', DemoContainer)
  .component('SourceContainer', SourceContainer)
  .component('MdWrapper', MdWrapper)
  .mount('#app')
