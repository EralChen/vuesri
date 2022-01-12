import { App } from 'vue'
import EChart from './src/index.vue'

EChart.install = (app: App): void => {
  app.component(EChart.name, EChart)
}
export {
  EChart,
}
export default EChart
