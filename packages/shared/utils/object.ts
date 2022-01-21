function isObject (object: any): boolean {
  return typeof object === 'object' && object !== null
}
function isPlainObject (obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]' // 检测数据是否为对象Object
}

function clean <T extends Record<string, any>> (data: T): Partial<T> {
  const o: Partial<T> = {}
  for (const key in data) {
    const item = data[key]
    if (item === null || item === undefined || item === '') break
    o[key] = item
  }
  return o
}

function isEmpty (obj: object): boolean {
  return isObject(obj) && Object.keys(obj).length === 0
}

function isNotEmpty (obj: object): boolean {
  return isObject(obj) && Object.keys(obj).length > 0
}

function vNum2Str<T extends Record<string, any>> (data: T): any {
  const newObj: any = {}
  for (const key in data) {
    const item = data[key]
    if (typeof item === 'number') {
      newObj[key] = item + ''
    } else {
      newObj[key] = item
    }
  }
  return newObj
}

export {
  isObject,
  isPlainObject,
  clean,
  isEmpty,
  isNotEmpty,
  vNum2Str,
}