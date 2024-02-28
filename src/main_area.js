import { createApp } from 'vue';
import ldt from './components/area/leida.vue';
import zzt from './components/area/zzt.vue';
import loudou from './components/area/loudou.vue';
import lunbo from './components/area/lbt.vue';
import map from './components/area/map.vue';
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