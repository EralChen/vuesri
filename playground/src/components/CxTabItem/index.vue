<script lang="ts">
import { computed, defineComponent, inject, watch } from 'vue'
import { propsKey, contextKey } from '../CxTabGroup/symbol'
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    active: null,
    inactive: null,
    'update:model-value': null,
  },
  setup (props, { emit }) {
    const pProps = inject<{
      modelValue: string|(string|number)[];
        }>(propsKey)

    const pCtx = inject<any>(contextKey)
    if (!pProps) throw new Error('CxTabItem must be in CxTabGroup')
    if (!pCtx) throw new Error('CxTabItem must be in CxTabGroup')
    const isActive = computed(() => {
      if (Array.isArray(pProps.modelValue)) {
        return pProps.modelValue.includes(props.name)
      } else {
        return pProps.modelValue === props.name
      }
    })

    isActive.value && emit('active')
    emit('update:model-value', isActive.value)
    watch(isActive, (v) => {
      v ? emit('active') : emit('inactive')
      emit('update:model-value', v)
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
  <div class="cx-tab-item" :class="{
    'is-active':isActive
  }" @click="handleClick">
    <slot :isActive="isActive"></slot>
  </div>
</template>
<style>
.cx-tab-item{
  cursor: pointer;
}

</style>
