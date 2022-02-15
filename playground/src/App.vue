<template>
  <AppWrapper>
    <router-view></router-view>
  </AppWrapper>
</template>
<script setup>
import AppWrapper from '_c/AppWrapper/index.vue'
</script>
<style>
html{
  height: 100%;
}
body, #app {
  height: inherit;
}
</style>
