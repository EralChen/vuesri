<route>
{
  meta: {
    title: "目录结构",
    sorted: 1
  }
}
</route>

# 目录结构

拉取 [vite-app](https://e.gitee.com/ZJSophon/repos/ZJSophon/vite-app-next) 观察项目目录结构。

> 由 [vite](https://cn.vitejs.dev) 构建。

认识项目目录结构。

## root

```shell
├── build                      # 工程构建相关
├── config                     # 工程环境的配置
├── public                     # 静态资源
├── src                        # web源代码
├── typings                    # 全局typescript定义
├── utils                      # node环境辅助函数
├── .env.xxx                   # 环境变量配置
├── .eslintignore              # eslint忽略文件
├── .eslintrc.js               # eslint配置项
├── .gitignore                 # git忽略文件
├── index.html                 # 单页面入口
├── package.json               # package.json
├── tsconfig.json              # 单页面入口
└── vite.config.ts             # vite构建配置
```

+ public：https://cn.vitejs.dev/guide/assets.html#the-public-directory
+ index.html: https://cn.vitejs.dev/guide/#index-html-and-project-root
+ .env.xxx: https://cn.vitejs.dev/guide/env-and-mode.html#env-files

> ！谨慎修改的内容：
>
> 工程化相关 build, config,  utils，tsconfig.json,  vite.config.ts， .eslintrc.js 
>
> 全局相关 typings, .gitignore, .eslintignore



## src

通常项目开发，只需要关注`src`目录。

了解src目录结构

```shell
src
├── api                       # api层，负责对接后台接口
├── assets                    # assets
├── components                # 低耦合的组件
├── icons                     # icons
├── router                    # vue-router路由
├── store                     # pinia Vue Store
├── styles                    # 全局样式表
├── utils                     # web环境辅助函数
├── views                     # vue页面
├── App.vue                   # App.vue
└── main.ts                   # 函数入口
```

### 别名

```json
{
    "@/*": [
        "src/*"
    ],
    "_v/*": [
        "src/views/*"
    ],
    "_c/*": [
        "src/components/*"
    ]
}
```

### api

```shell
api
├── _request              # fetch封装
└── xxx                   # 存放具体接口的文件，应与views下 文件夹/文件 同名 
```

#### 观察用例

1. api > __request > public.ts

封装了一个 去`public/data/`获取数据的方法

```js
import { RestFetch } from 'vunk'
// RestFetch类是对 fetch的一层封装，你可能暂时不用去理解它
const restFetch = new RestFetch({
  // baseURL是默认的基础请求路径
  baseURL: import.meta.env.VITE_BASE_URL + '/data',
})

const request = async <T>(...args: Parameters<typeof restFetch.request>) => {
  const data = await restFetch.request(...args)
  return data as T
}
export default request
```

2. api > _demo-master > index.ts

```js
// 引用 request
import request from '../_request/public'
// 在< >中可以断言输出的ts类型
export const getTestData = () => request<{ name: string }>({
  method: 'GET',
  
  // 如果你需要单独修改这个接口的 baseURL
  // baseURL: 'XXX'
    
  // 实际会请求 baseUrl + url
  url: '/test.json', 
})
```

>这里 `_demo-master`文件夹名称使用`_`开头，只是因为它是一个供参考的用例。
>
>`_`开头的命名，通常有 `“内部的”` 含义。
>
>实际开发中，无需使用`_`开头。
>
>实际开发中，可以删除所有`_demo`开头的文件或文件夹（不限于api文件下）。

`getTestData` 将获取 `public/data/test.json`的数据

```js
// test.json
{
  "name": "cx"
}
```

3. views > _demo-master > index.vue

```vue
<script lang="ts" setup>
import { getTestData } from '@/api/_demo-master'
getTestData().then(res => {
  console.log(res) // {name:cx}
})
</script>
<template>
   <div></div>
</template>
```

#### 总结

+ `api`文件夹是所有接口的**入口**
+ `views`层 调用后端接口，要从**相应**文件夹引用
+ `_request`文件夹下，可对请求方法预先做一层**封装**

### views

结合`router/_demo-master/index.ts`， 观察`views/_demo-master/views`下的文件目录

```shell
views
├── components                # 与页面耦合的公用组件
	├── SharedA 			  # 公用组件A
		 ├── PartA.vue
		 └── index.vue
	└── SharedB.vue			  # 公用组件B

├── a						  # 页面入口，访问路径 /a 的页面 
	├── components            # 与 a 页面 耦合的公用组件

    ├── ui-a				  # 作为页面部分被 index.vue 引用
        ├── part-a.vue
    	└── index.vue
    ├── ui-b.vue			 
    ├── views				  # 子级路由入口
    	...
    	└── c.vue			  # 页面入口， 访问路径 /a/c 页面 
	└── index.vue             # a页面入口,包含 ui-a， ui-b

├── b						  # 页面入口， 访问路径 /b 页面 
	└── index.vue
	        
```

#### 命名

+ 作为`页面部分`的，采用小写
+ 作为`公用部分`的，采用大写
+ `index.vue` 为入口命名，一律小写，命名规则作用于其文件夹。 通常是为了拆分复杂组件，将组件分成多个部分，由`index.vue`整合。

