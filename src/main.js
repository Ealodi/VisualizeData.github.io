// main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import WordCloud from './components/wordcloud.vue';

let app = createApp(App);
app.component('wordcloud', WordCloud);  // 注册 WordCloud 组件
app.mount("#char4");
