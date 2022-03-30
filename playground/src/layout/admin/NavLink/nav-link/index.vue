<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { RouteLocation, useRoute } from 'vue-router'
import CollapseX from '../collapse-x/index.vue'
export default defineComponent({
  name: 'AdminLayoutNavLink',
  components: {
    CollapseX,
  },
  props: {
    linkable: {
      type: Boolean,
      default: true,
    },
    to: {
      type: String,
      required: true,
    },
    bodyIf: {
      type: Boolean,
      default: false,
    },
    expandBody: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    navigate: (e: RouteLocation & {
        href: string;
    }) => e,
  },
  setup (props, {emit}) {
    const hasChildren = computed(() => !props.linkable)
    const collapseShow = ref(props.expandBody)
    const route = useRoute()
    watch(() => props.expandBody, (v) => {
      collapseShow.value =  v
    }, { immediate: true })

    watch(route, (v) => { // 如果这条路由的子节点是当前访问节点,则展开这个节点
      if (v.fullPath.includes(props.to)) {
        collapseShow.value = true
      }
    }, { immediate: true })

    function linkTo (route: RouteLocation & {
        href: string;
    }, navigate: AnyFunc) {

      if (!hasChildren.value) {
        navigate()
        emit('navigate', route)
      }
    }
    return {
      hasChildren,
      collapseShow,
      linkTo,
    }
  },
})
</script>
<template>
  <router-link :to="to" custom>
    <template #default="{ route, navigate, isActive, isExactActive, href }">
      <CollapseX 
        :icon="hasChildren" 
        :header-class="{
          'is-dir': hasChildren
        }" 
        v-model="collapseShow"
        :hidden-body="bodyIf"
      >
        <template #header>
          <a
            @click.prevent="linkTo(route, navigate)"
            class="admin-layout-nav-link"
            :href="href"
            :class="{
              'is-active': isActive,
              'is-exact-active': isExactActive,
            }"
          >
            <slot name="title">{{ route.meta.title }}</slot>
          </a>
        </template>
     
        <template #body>
          <slot name="body"></slot>
        </template>
      </CollapseX>
    </template>
  </router-link>
</template>
