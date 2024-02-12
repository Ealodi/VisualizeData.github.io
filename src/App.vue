<!-- App.vue -->
<template>

  <wordcloud/>

</template>

<script setup>
import WordCloud from './components/wordcloud.vue';

const message = 'Welcome to Your Vue App';
</script>

<style scoped>
/* 样式规则 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #41b883;
  padding: 20px;
}

img {
  width: 150px;
  height: auto;
}

h1 {
  font-size: 2em;
  margin: 0;
  color: #ffffff;
}
</style>
