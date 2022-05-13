<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { useSublayer } from '@vuesri/shared/use'
export default defineComponent({
  props: {
    definitionExpression: {
      type: String,
      default: '1=1',
    },
  },
  setup (props) {
    const sublayer = useSublayer()
    watchEffect(() => {
      sublayer.definitionExpression = props.definitionExpression
    })
    
    
    return () => null
  },
})
</script>

