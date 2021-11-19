import createComponent from './components'
import createComponentForPlayground from './playground'
import {parallel} from 'gulp'

export default parallel(
  createComponent,
  createComponentForPlayground,
)