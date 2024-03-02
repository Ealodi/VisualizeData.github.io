// main.js
import './assets/main.css';
import { createApp } from 'vue';
//import App from './App.vue';
import WordCloud from './components/wordcloud.vue';
import header from './components/header.vue';
import ElementPlus from 'element-plus';
//import wordstream from './components/wordstream.vue';
// import mtnews from './components/mtnews.vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

//词云
let wordcloud = createApp(WordCloud);
wordcloud.mount("#char4");
// 页面头
let header_ = createApp(header);
header_.mount("#header");

// let mtnews_ = createApp(mtnews);
// mtnews_.mount("#chart1");
// let wordstream_ = createApp(wordstream);
// wordstream_.mount("#char4")