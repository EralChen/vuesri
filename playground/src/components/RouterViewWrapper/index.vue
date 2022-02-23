
<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
    </keep-alive>
  </router-view>
</template>
