<template>
  <div class="main-container">
    <!-- Panel 子组件 -->
    <panel :message="message" :echartsInstance="echartsInstance" />
  </div>
</template>

<script>
import Panel from './panel.vue';
import * as echarts from 'echarts';

export default {
  name: 'MainContainer',
  components: {
    Panel,
  },
  data() {
    return {
      echartsInstance: null,
      message: '这里是消息',
    };
  },
  mounted() {
    // 创建一个空的 div 元素用于初始化 ECharts 实例
    const chartContainer = document.createElement('div');
    // 设置 div 的样式，确保其有足够的宽高
    chartContainer.style.width = '100%';
    chartContainer.style.height = '100%';

    // 将 div 元素添加到当前组件的元素中
    this.$el.appendChild(chartContainer);

    // 初始化 ECharts 实例
    this.echartsInstance = echarts.init(chartContainer);

    // 在这里可以设置图表的配置项和数据
    // 例如：this.echartsInstance.setOption({...});
    const option = {
      title: {
        text: '简单柱状图',
      },
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '柱状图',
          type: 'bar',
          data: [20, 40, 60, 80, 100], // 修改这里，使用具体的数据
        },
      ],
    };

    // 使用配置项设置图表
    this.echartsInstance.setOption(option); // 修改这里，使用正确的 ECharts 实例
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center; /* 居中显示 */
  align-items: center;
  height: 100vh; /* 设置整个页面的高度 */
}
</style>
