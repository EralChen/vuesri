<script lang="ts">
import { computed, defineComponent, inject, watch } from 'vue'
import {VkTabGroupSymbol} from '@vunk/components/tab-group'
import { ObjectUtils } from '@vunk/shared'
enum CollectionType {
  array,
  object,
  other
}
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
    const pProps = inject<{modelValue: any}>(VkTabGroupSymbol.propsKey)
    const pCtx = inject<any>(VkTabGroupSymbol.contextKey)
    if (!pProps) throw new Error('VkTabItem must be in VkTabGroup')
    if (!pCtx) throw new Error('VkTabItem must be in VkTabGroup')
    const collectionType = computed(() => {
      if (ObjectUtils.isPlainObject(pProps.modelValue)) {
        return CollectionType.object
      } else if (Array.isArray(pProps.modelValue)) {
        return CollectionType.array
      } else {
        return CollectionType.other
      }
    })

    const actions: Record<CollectionType, {
      isActive: (name: any) => boolean
      remove: AnyFunc
      set: AnyFunc
    }> = {
      [CollectionType.array]: {
        isActive: (name) => !!pProps.modelValue.includes(name),
        remove: (name) => {
          const arr = [...pProps.modelValue]
          arr.splice(
            pProps.modelValue.findIndex(item => item === name),
            1,
          )
          return arr
        },
        set: (name) => [...pProps.modelValue, name],
      },
      [CollectionType.object]: {
        isActive: (name) => !!pProps.modelValue[name + ''],
        remove: (name) => {
          const obj = { ...pProps.modelValue }
          obj[name] = false
          return obj
        },
        set: (name) => ({ ...pProps.modelValue, [name]: true }),
      },
      [CollectionType.other]: {
        isActive: (name) => pProps.modelValue === name,
        remove: (_) => undefined,
        set: (name) => name,
      },
    }
    
    const isActive = computed<boolean>(() =>  actions[collectionType.value].isActive(props.name))


    emit('update:model-value', isActive.value)
    isActive.value && emit('active')
    
    watch(isActive, (v) => {
      emit('update:model-value', v)
      v ? emit('active') : emit('inactive')
    })

    const handleClick = () => {
      if (isActive.value && props.clearable) {
        // 清除
        const nModelValue = actions[collectionType.value].remove(props.name)
        pCtx.emit('update:model-value', nModelValue)
      } else {
        // 设置
        const nModelValue = actions[collectionType.value].set(props.name)
        pCtx.emit('update:model-value', nModelValue)
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
