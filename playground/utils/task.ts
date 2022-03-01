import {spawn} from 'child_process'
import {workRoot} from '../config/path'
export const taskWithName = <T extends AnyFunc>(displayName: string,fn:T):T => {
  return Object.assign(fn, {
    displayName,
  })
}
export const run = async (script: string, cwd = workRoot) => { // 使用这个方法, 调用脚本命令
  return new Promise((resolve) => {
    // const 
    const [cmd, ...args] = script.split(' ')
    // 在node中使用子进程运行脚本
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      shell: true,
    })
    app.on('close', resolve)
  })
}