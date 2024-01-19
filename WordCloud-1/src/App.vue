<template>
  <div id="app">
    <WordCloud1/>
    <WordCloud2/>
  </div>
</template>

<script>
import WordCloud1 from './components/WordCloud1.vue';
import WordCloud2 from './components/WordCloud2.vue'
export default {
  name: 'App',
  components: {
    WordCloud1,
    WordCloud2
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
