<script lang="ts">
import { props } from './ctx'
import { defineComponent, getCurrentInstance, inject, ComponentInternalInstance } from 'vue'
import { sLayerItems } from '@vuesri/components/tree-layer-group/src/symbols'
export default defineComponent({
  name: 'VaTreeLayerItem',
  props,
  setup (props) {
    const layerItems = inject<Record<string, ComponentInternalInstance>>(sLayerItems)
    if (!layerItems) throw new TypeError()
    const vm = getCurrentInstance()
    if (vm) {
      layerItems[props.type] = vm
    }
    return () => null
  },
})
</script>
