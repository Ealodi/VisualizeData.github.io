// main.js
import './assets/main.css'
import { createApp } from 'vue'
import index from './components/index.vue'
import header from './components/header.vue'
import area from './components/area/area.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import compare from '../comparison/compare.vue'
import wordstream from './components/wordstream/wordstream.vue'
// 页面头
let header_ = createApp(header);
header_.mount("#header_");
// 主页面
let main_body = createApp(index);
main_body.mount("#main");

var navs = document.querySelectorAll(".nav_0");

// 为每个元素添加点击事件监听器
navs.forEach(function(nav) {
  nav.addEventListener("click", function() {
        document.querySelector('.nav_active').classList.remove("nav_active");
        nav.classList.add("nav_active");
        // 获取 i 元素的类名
        var iconClass = nav.querySelector("i").classList[0];
        main_body.unmount();
        if (iconClass == 'nav_1')main_body = createApp(index);
        else if(iconClass == 'zt')main_body = createApp(area);
        else if(iconClass == 'nav_3')main_body = createApp(compare);
        else if(iconClass == 'nav_2')main_body = createApp(wordstream);
        main_body.use(ElementPlus);
        main_body.mount("#main");
  });
});
  