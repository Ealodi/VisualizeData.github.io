<template>
  <div id="app">
    <mainbox/>
  </div>
</template>

<script>
import mainbox from './components/mainbox.vue'
export default {
  name: 'App',
  components: {
  mainbox
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
