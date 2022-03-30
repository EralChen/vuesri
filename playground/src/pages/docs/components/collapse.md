<route>
{
  meta: {
    title: "Collapse"
  }
}
</route>

# Collapse

一个可折叠的盒子

+ 组件分为`body`和 `header`

+ 点击`header`切换`body`显隐

## props

|                    | type             | default | 描述                                             |
| ------------------ | ---------------- | ------- | ------------------------------------------------ |
| event              | String           | 'click' | 控制`header`的`toggle`事件触发，为`''`时屏蔽事件 |
| v-model/modelValue | Boolean          | false   | `body`显隐                                       |
| headerClass        | [String, Object] | ''      | `header`自定义class                              |
| bodyClass          | [String, Object] | ''      | `body` 自定义class                               |
| hiddenBody         | Boolean          | false   | `body` v-if                                      |

