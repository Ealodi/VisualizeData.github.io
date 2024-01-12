<template>
  <div id="app">
    <wordcloud/>
  </div>
</template>

<script>
import demo from './components/demo.vue'
export default {
  name: 'App',
  components: {
  wordcloud
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
