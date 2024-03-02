<template>
    <div id="funnelChart"></div>
</template>
  
  
  
<script>
  export default{
      mounted(){
        // 初始化 ECharts 实例
        var myChart = echarts.init(document.getElementById('funnelChart'));

        // 指定图表的配置项和数据
        var option = {
            title: {
              
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%'
            },
            legend: {
                orient: 'vertical',
                itemGap: 15,
                right: 10,
                data: ['访问', '咨询', '订单', '点击', '展现'],
                top: 0,
                textStyle: {
                    color: '#fff',
                },
                left: 'right' // 调整图例位置为左对齐
            },
            calculable: true,
            series: [
                {
                    name: '漏斗图',
                    type: 'funnel',
                    width: '50%',
                    height: '70%',
                    left: '20%',
                    top: '10%',
                    bottom: '5%',
                    data: [
                        { value: 60, name: '访问' },
                        { value: 40, name: '咨询' },
                        { value: 20, name: '订单' },
                        { value: 80, name: '点击' },
                        { value: 100, name: '展现' }
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表
        myChart.setOption(option);
      }
      
              
  };
  
</script>

<style scoped>
#funnelChart {
    width: 100%;
    height: 100%;
}
</style>