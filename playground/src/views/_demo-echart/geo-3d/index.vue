<script lang="ts" setup>
import { EChart } from '@vunk/echarts'
import ChartConfig from './chart-config.vue'
</script>
<template>
  <EChart class="geo-chart-x">
    <ChartConfig></ChartConfig>
  </EChart>
</template>
<style>
.geo-chart-x{
  background: rgba(0, 21, 139, 0.513);
}
</style>
