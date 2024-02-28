import earthFlyLine from "../node_modules/earth-flyline";

import geojson from '../json/world.json';
earthFlyLine.registerMap("world", geojson);
// 获取 dom 节点作为容器 注：该节点请设置宽高

const chart = earthFlyLine.init({
  dom: document.getElementById('map_div'),
  map: "world",
  config: {
    R: 140,
    earth: {
      color: "#13162c",
    },
    mapStyle: {
      areaColor: "#2e3564",
      lineColor: "#797eff",
    },
    spriteStyle: {
      color: "#797eff"
    },
    pathStyle: {
      color: "#cd79ff", 
    },
    flyLineStyle: {
      color: "#cd79ff",
    },
    scatterStyle: {
      color: "#cd79ff",
    },
    hoverRegionStyle: {
      areaColor: "#cd79ff",
    },
    regions: {
      China: {
        areaColor: "#2e3564",
      },
    },
  },
});
