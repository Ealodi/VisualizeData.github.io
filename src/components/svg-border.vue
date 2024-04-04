<template>
    <div class="svg-wrapper">
        <svg height="260" width="400" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="260" width="400" />
        </svg>
      </div>
</template>
<style scoped>
  .svg-wrapper {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
        margin: 0 auto;
    width: 320px;  
  }
  .shape {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
    fill: transparent;
    stroke: #19f6e8;
    border-bottom: 5px solid black;
    transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  }

  .shape:hover {
    stroke-width: 6px;
    stroke-dashoffset: 0;
    stroke-dasharray: 760;
  }
  
</style>