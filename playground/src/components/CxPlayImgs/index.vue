<script lang="ts">
import { defineComponent, PropType, computed, ref, onMounted } from 'vue'
export default defineComponent({
  props: {
    url: {
      type: String,
      default: '/static',
    },
    extension: {
      type: String,
      default: 'jpg',
    },
    range: {
      type: Array as PropType<number[]>,
      default: () => [1, 10],
    },
  },
  setup (props) {
    const playNode = ref()
    // const maxLength = computed(() => props.range[1] - props.range[0] + 1)
    // 存储预加载的DOM对象和长度信息
    var store: {
      [n: number]: HTMLImageElement
      length: number
    } = {
      length: 0,
    }

    onMounted(() => {
      for (let start = props.range[0]; start <= props.range[1]; start++) {
        (function (index) {
          var img = new Image()
          img.onload = function () {
            store.length++
            // 存储预加载的图片对象
            store[index] = img
            play(playNode.value)
          }
          img.onerror = function () {
            store.length++
            play(playNode.value)
          }
          img.src = props.url + '/' + index + '.jpg'
        })(start)
      }

    })
    // 图片序列预加载
    
    function play (el: HTMLDivElement) {
      var index = props.range[0]
      el.innerHTML = ''
      // 依次append图片对象
      var step = function () {
        if (store[index - 1]) {
          el.removeChild(store[index - 1])
        }
        if (index === props.range[0] && store[props.range[1]].parentElement === el) {
          el.removeChild(store[props.range[1]])
        }
        // if (index === props.range[0]) {
        //   el.removeChild(store[index])
        // }
        el.appendChild(store[index])
        // 序列增加
        index++
      
        if (index <= props.range[1]) {
          setTimeout(step, 100)
        } else {   // 如果超过最大限制
          index = props.range[0]
          setTimeout(step, 100)
        }
      }
      // 等100%动画结束后执行播放
      setTimeout(step, 100)

    }

    return {
      playNode,
    }
  },
})
</script>
<template>
  <div class="cx-play-imgs-x" ref="playNode">

  </div>
</template>
<style>
.cx-play-imgs-x{
  width: 100%;
  height: 100%;
}
</style>