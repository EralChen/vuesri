<script lang="ts">
import { defineComponent,ref } from 'vue'
import { VkTabItem } from '@vunk/components/tab-item'
import { VkTabGroup } from '@vunk/components/tab-group'
export default defineComponent({
  components: {
    VkTabGroup,
    VkTabItem,
  },
  setup () {
    const tabValue = ref('')
    const tabArrayValue = ref([])
    const tabFlag = ref(false)
    const itemActive = () => {
      console.log('激活')
    }
    const itemInactive = () => {
      console.log('失活')
    }
    return {
      tabValue,
      tabArrayValue,
      tabFlag,
      itemActive,
      itemInactive,
    }
  },
})
</script>
<template>

<vk-tab-group v-model="tabValue">
  <vk-tab-item name="1"><button>1</button></vk-tab-item>
  <vk-tab-item name="2"><button>2</button></vk-tab-item>
  <vk-tab-item name="3" 
    :clearable="false"
    @active="itemActive"
    @inactive="itemInactive"
  ><button>3</button></vk-tab-item>
</vk-tab-group>

<vk-tab-group v-model="tabArrayValue">
  <vk-tab-item name="1"><button>1</button></vk-tab-item>
  <vk-tab-item name="2"><button>2</button></vk-tab-item>
  <vk-tab-item name="3"><button>3</button></vk-tab-item>
</vk-tab-group>
{{ tabArrayValue }}

<vk-tab-group v-model="tabFlag">
  <vk-tab-item :name="true"><button>1</button></vk-tab-item>
</vk-tab-group>


</template>
<style>
.vk-tab-group{
  display: flex;
}
.vk-tab-item button{
  width: 100px;
}
.vk-tab-item.is-active button{
  color: white;
  background-color: darkgreen;
}
</style>