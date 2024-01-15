<template>
  <div class="panel">
    <div class="panel-footer">{{ message }}</div>
    <!-- 图表容器 -->
    <div class="chart-container" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'Panel',
  props: {
    message: {
      type: String,
      required: true,
    },
    echartsInstance: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // 在这里可以使用 this.echartsInstance 进行图表的显示或其他操作
    // 例如：this.echartsInstance.setOption({...});

    // 在这里为图表容器设置宽度和高度
    const chartContainer = this.$refs.chart;
    chartContainer.style.width = '100%';
    chartContainer.style.height = '400px'; // 你可以根据需求调整高度
  },
};
</script>

<style scoped>
.panel {
  width: 80%; /* 设置 panel 的宽度 */
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
  border-radius: 5px;
}

.panel .panel-footer {
  padding: 10px;
  border-bottom: 1px solid rgba(25, 186, 139, 0.17);
}

.chart-container {
  margin: 20px;
}
</style>
