<template>
  <div id="app">
    <Earthdata/>
  </div>
</template>

<script>
import Earthdata from './components/Earthdata.vue'
export default {
  name: 'App',
  components: {
  Earthdata
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
