import { createApp } from 'vue'
import ldt from './components/area/leida.vue'
import zzt from './components/area/zzt.vue'
import loudou from './components/area/loudou.vue'
import lunbo from './components/area/lbt.vue'
import map from './components/area/map.vue'
import headerVue from './components/wordstream/header.vue'
import statistic from './components/area/statistic.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import svgBorder from './components/svg-border.vue'
import country from './components/area/country.vue'

let ldt_ =  createApp(ldt);
ldt_.mount('#chartmain_bing');

let loudou_ = createApp(loudou);
loudou_.mount('#loudou');

let lunbo_ = createApp(lunbo);
lunbo_.mount('#lbt');

let zzt_ =  createApp(zzt);
zzt_.mount('#chartmain');

let map_ =  createApp(map);
map_.mount('#map');

let header_ = createApp(headerVue);
header_.mount("#header");

let statistic_ = createApp(statistic);
statistic_.use(ElementPlus);
statistic_.mount("#statics");

let country_ = createApp(country);
country_.use(ElementPlus);
country_.mount("#country");