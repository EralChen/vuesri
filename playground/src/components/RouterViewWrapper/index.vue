
<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :max="5">
      <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
    </keep-alive>
  </router-view>
</template>
