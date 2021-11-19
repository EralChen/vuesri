
// 添加一个组件
import {parallel, series} from 'gulp'
import mri from 'mri'
import { taskWithName } from '../../../utils/task'
import path from 'path'
import { playgroundRoot } from '../../../config/path'
import fsPromises from 'fs/promises'
import { createVueStr } from './temp'
const argv = process.argv.slice(2)
const mriData = mri<{
  name: string,
  ground: string
}>(argv)
const playgroundSrc = path.resolve(playgroundRoot, './src')
const playgroundViews = path.resolve(playgroundRoot, './src/views')
const DEMODIR = '_demo-components'

export default series(
  parallel(
    taskWithName('playground:addRoute', async () => {
      const routerExampleFile = path.resolve(playgroundSrc, `./router/${DEMODIR}/index.ts`)
      let data = await fsPromises.readFile(routerExampleFile, { encoding: 'utf8' })
      data = data.replace(/export\sdefault\s\[((.|\s)*?)\]/, (match, $1) => {
        const nRoute = [
          '  {',
          `    path: '/${DEMODIR}/${mriData.name}',`,
          `    component: () => import('_v/${DEMODIR}/${mriData.name}/index.vue'),`,
          '  },',
          '',
        ]
        return match.replace($1, $1 + nRoute.join('\n'))
      })
      return fsPromises.writeFile(routerExampleFile, data)
    }),
    taskWithName('playground:createView', async () => {
      const componentsDemoRoot = path.resolve(playgroundViews, DEMODIR)
      const componentPath = path.resolve(componentsDemoRoot, `./${mriData.name}`)
      await fsPromises.mkdir(componentPath, {recursive: true})
      await fsPromises.writeFile(path.resolve(componentPath, './index.vue'), createVueStr())
    }),
  ),
  taskWithName('playground:addRouteEntryForHome', async () => {
    const viewsComponentsJson = path.resolve(playgroundViews, `${DEMODIR}.json`)
    let data = await fsPromises.readFile(viewsComponentsJson, { encoding: 'utf8' })
    const dataJson: {title: string, data: {to: string, label: string}[]}[] = JSON.parse(data)
    const ground = mriData.ground || '#'
    const routeItem = dataJson.find(item => item.title === ground)
    if (!routeItem) dataJson.push({title: ground, data: []})
    routeItem?.data.push({
      label: mriData.name,
      to: `/${DEMODIR}/${mriData.name}`,
    })
    data = JSON.stringify(dataJson, null, 2)
    return fsPromises.writeFile(viewsComponentsJson, data)
  }),
) 