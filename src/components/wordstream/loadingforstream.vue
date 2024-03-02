<template>
  <el-table v-loading="loading" style="width: 100%; height: 100%">

  </el-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
onMounted(() => {
  // Simulating a 2-second delay before setting loading to false
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<style>
body {
  margin: 0;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>
