<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, inject, markRaw, nextTick, onUnmounted, provide, ref, watchEffect } from 'vue'
import { GraphicToNode } from './types'
import PopupTemplate from 'esri/PopupTemplate'
import { useView } from '@vuesri/shared/use'
type MapValue<T> = T extends Map<unknown, infer V> ? V : never
export default defineComponent({
  name: 'VaPopupTemplate',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const instance = inject<{ popupTemplate: __esri.PopupTemplate } | null>('vaLayer', null)
    const o = instance?.popupTemplate
    // core
    const graphicToNode = ref<GraphicToNode>(new Map())
    const popupTemplate = new PopupTemplate({
      outFields: ['*'],
      async content (e:{graphic:__esri.Graphic;}) {
        const attributes = e.graphic.attributes
        markRaw(e.graphic)
        /*
          content的回调将在弹窗被打开时执行，
          有可能一个弹窗会打开多个要素，
          根据graphic缓存他们，到template下预渲染
          渲染完毕后，return 的 el将会在弹窗内展示
         */
        graphicToNode.value.set(e.graphic, { el: null, attributes })
        await nextTick()
        return graphicToNode.value.get(e.graphic)?.el
      },
      ...props.defaultOptions,
    })
    watchEffect(() => {
      popupTemplate.title = props.title
    })
    if (instance && !props.orphan) {
      instance.popupTemplate = popupTemplate
    }
    onUnmounted(() => {
      instance && (instance.popupTemplate = o as __esri.PopupTemplate)
    })


    /* 弹窗关闭时，清除缓存 */
    const handler = view.popup.watch('visible', v => {
      if (!v) graphicToNode.value.clear()
    })
    onUnmounted(() => {
      handler.remove()
    })
    /* 弹窗关闭时，清除缓存  end */

    emit('load', { view, popupTemplate })
    provide('vaPopupTemplate', popupTemplate)
    return {
      graphicToNode,
      setRef: (option: MapValue<GraphicToNode>, el) => option.el = el,
    }
  },
})
</script>
<template>
  <div v-show="false">
    <!-- key为func(), 节点会更新 ? -->
    <div
      v-for="[g, option] of graphicToNode.entries()"
      :key="g.getObjectId()"
      :ref="(el) => setRef(option, el)"
    >
      <slot
        :attributes="option.attributes"
        :graphic="g"
      >
      </slot>
    </div>
  </div>
  <slot name="extends"></slot>
</template>
