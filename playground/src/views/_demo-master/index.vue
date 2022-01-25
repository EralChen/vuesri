<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { VkTabGroup } from '@vunk/components/tab-group'
import { VkTabItem } from '@vunk/components/tab-item'
import { VkBoxHandler } from '@vunk/components/box-handler'
export default defineComponent({
  components: {
    VkTabGroup,
    VkTabItem,
    VkBoxHandler,
  },
  setup () {
    const checked = reactive({
      left: [] as any[],
      right: [] as any[],
    })
    const checkedPair = computed(() => {
      const data: any[] = []
      const len = checked.left.length > checked.right.length ? checked.left.length : checked.right.length
      for (let i = 0; i < len; i++) {
        const leftItem = checked.left[i]
        const rightItem = checked.right[i]
        const pairItem = [leftItem, rightItem]
        data.push(pairItem)
      }
      return data
    })
    const delChecked = (k: 'left'|'right', v: string) => {
      const arr =  checked[k]
      const index = arr.findIndex(item => item === v)
      if (index === arr.length - 1) {
        arr.pop()
        while (arr.length > 0 && !(arr[arr.length - 1] ?? false)) {
          arr.pop()
        }
      } else {
        arr[index] = undefined
      }
    }
    return {
      checked,
      checkedPair,
      delChecked,
    }
  },
})
</script>
<template>
  <div sk-flex="row">
    <VkTabGroup class="left-eyes" v-model="checked.left">
      <VkTabItem v-for="i in 10" :name="i + 'l'" :key="i">{{ i + 'l' }}</VkTabItem>
    </VkTabGroup>
    <VkTabGroup class="left-eyes" v-model="checked.right">
      <VkTabItem v-for="i in 10" :name="i + 'r'" :key="i">{{ i + 'r' }}</VkTabItem>
    </VkTabGroup>
  </div>
  <div class="checked-display" sk-flex>
    <div class="checked-display-pair" v-for="(pair, index) of checkedPair" :key="index" sk-flex>
      <div class="checked-display-item">
        <VkBoxHandler class="checked-display-item-handler" v-if="pair[0]"
          @click="delChecked('left', pair[0])"
        >×</VkBoxHandler>
        {{ pair[0] }}
      </div>
      <div class="checked-display-item">
        <VkBoxHandler class="checked-display-item-handler" v-if="pair[1]"
          @click="delChecked('right', pair[1])"
        >×</VkBoxHandler>
        {{ pair[1] }}
      </div>
    </div>
  </div>
</template>
<style>
.left-eyes,
.right-eyes {
  margin: 5px;
  background-color: greenyellow;
  width: 200px;
}
.vk-tab-item:hover {
  border: brown 2px solid;
}
.vk-tab-item.is-active {
  background-color: gray;
}
.checked-display {
  flex-wrap: wrap;
}
.checked-display-item {
  width: 4em;
  height: 4em;
  border-radius: 4px;
  border: 1px dashed black;
}
.checked-display-item + .checked-display-item {
  margin-left: 0.2em;
}
.checked-display-pair {
  padding: 0.5em;
}
.checked-display-pair + .checked-display-pair {
  border-left: 2px solid gray;
}
.checked-display-item-handler {
  right: -4px;
  top: -12px;
  font-weight: bolder;
}
</style>