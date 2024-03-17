<template>
  <div class="globe-container" id="globeViz"></div>
  <input class="slider" id="slider" type="range" min="0" max="47" step="1" value="0">
  <Timeunder />
  <div id="value-tooltip">0</div>
  <button disabled="" style="margin-right: 10px;" class="play-button">
    播放
  </button>
</template>
<script>
import Timeunder from './timeunder.vue'
export default {
  components : {
    Timeunder
  }
}
</script>

<style scoped>

.slider {
  -webkit-appearance: none;
  height: 2px;
  width: 40%;
  margin-right: 10px;
  border-radius: 5px;
  background: #d2dcfc;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  position: absolute;
  z-index: 2;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#value-tooltip {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 98%;
  left: 50%;
  background-color: transparent;
  z-index: 1;
  color: #fff;
}
.slider:hover {
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #000;
  cursor: pointer;
  border: 2px solid #ccd6f6;
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #000;
  cursor: pointer;
  border: 2px solid #ccd6f6;
}
.play-button {
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  background-color: rgba(1, 1, 1, 0);
  border: 1px solid #ccd6f6;
  color: #ccd6f6;
  outline: none;
  width: 4em;
  position: absolute;
  z-index: 1;
  top: 93%;
  left: 70.5%;
}
.globe-container {
  margin-top: -80px;
  height: 100%;
  width: 100%;
}
</style>

