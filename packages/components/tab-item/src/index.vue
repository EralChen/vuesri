<script lang="ts">
import { computed, defineComponent, inject, watch } from 'vue'
import {VkTabGroupSymbol} from '@vunk/components/tab-group'
export default defineComponent({
  name: 'VkTabItem',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number, Boolean],
      required: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    eventType: {
      type: String,
      default: 'click',
    },
  },
  emits: {
    active: null,
    inactive: null,
    'update:model-value': null,
  },
  setup (props, { emit }) {
    const pProps = inject<{
      modelValue: string|boolean|(string|number|boolean)[]
        }>(VkTabGroupSymbol.propsKey)

    const pCtx = inject<any>(VkTabGroupSymbol.contextKey)
    if (!pProps) throw new Error('VkTabItem must be in VkTabGroup')
    if (!pCtx) throw new Error('VkTabItem must be in VkTabGroup')
    const isActive = computed(() => {
      if (Array.isArray(pProps.modelValue)) {
        return pProps.modelValue.includes(props.name)
      } else {
        return pProps.modelValue === props.name
      }
    })


    emit('update:model-value', isActive.value)
    isActive.value && emit('active')
    
    watch(isActive, (v) => {
      emit('update:model-value', v)
      v ? emit('active') : emit('inactive')

    })

    const handleClick = () => {
      if (isActive.value && props.clearable) {
        // 清除
        if (Array.isArray(pProps.modelValue)) {
          const arr = [...pProps.modelValue]
          arr.splice(
            pProps.modelValue.findIndex(item => item === props.name),
            1,
          )
          pCtx.emit('update:model-value', arr)
        } else {
          pCtx.emit('update:model-value', undefined)
        }
      } else {
        // 设置
        if (Array.isArray(pProps.modelValue)) {
          pCtx.emit('update:model-value', [...pProps.modelValue, props.name])
        } else {
          pCtx.emit('update:model-value', props.name)
        }
      }
    }

    return {
      isActive,
      handleClick,
    }
  },
})
</script>
<template>
  <div class="vk-tab-item" :class="{
    'is-active':isActive
  }" @[eventType]="handleClick">
    <slot :isActive="isActive" :toggle="handleClick"></slot>
  </div>
</template>
<style>
.vk-tab-item{
  cursor: pointer;
}
</style>
