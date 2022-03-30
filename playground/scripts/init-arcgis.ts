import { series, dest,src } from 'gulp'
import { taskWithName } from '../utils/task'
import path from 'path'
import { workRoot } from '../config/path'
const inputArcgisAssets = path.resolve(workRoot, './node_modules/@arcgis/core/assets')
const outputArcgisAssets = path.resolve(workRoot, './public/Esri')
export default series(
  taskWithName('copy assets', async () => {
    //
    return src(inputArcgisAssets + '/**/*').pipe(
      dest(outputArcgisAssets),
    )
    
  }),
)