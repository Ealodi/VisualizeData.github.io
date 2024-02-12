// main.js
import './assets/main.css';
import { createApp } from 'vue';
//import App from './App.vue';
import WordCloud from './components/wordcloud.vue';
import header from './components/header.vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

let wordcloud = createApp(WordCloud);
wordcloud.mount("#char4");

let header_ = createApp(header);
header_.mount("#header");