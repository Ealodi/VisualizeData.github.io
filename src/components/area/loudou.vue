<template>
    <div id="funnelChart"></div>
</template>
  
  
  
<script>
  export default{
      mounted(){
        // 初始化 ECharts 实例
        var myChart = echarts.init(document.getElementById('funnelChart'));
        $.getJSON('/src/assets/json/area.json', function(data) {
            const nameArray = Object.keys(data["t2"]);
            const transformedDataArray = Object.entries(data["t2"]).map(([name, value]) => ({ name, value }));
            var total = 0;
            transformedDataArray.forEach(item =>{total += item;});
            // 指定图表的配置项和数据
            var option = {
                title: {
                
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    position: 'inside',
                    formatter: '{a} <br/>{b} : {c}'
                },
                legend: {
                    orient: 'vertical',
                    itemGap: 15,
                    right: 10,
                    data: nameArray,
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
                        width: '60%',
                        height: '80%',
                        left: '20%',
                        top: '10%',
                        bottom: '5%',
                        data: transformedDataArray,
                        label: {
                            show: true,
                            formatter: function (params) {
                                var percentage = (params.data.value / transformedDataArray[0].value) * 100;
                                return `${percentage.toFixed(0)}%`;
                            },
                            color: '#000',
                            position: 'inside' // 将占比显示在区块中间
                        },
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表
            myChart.setOption(option);
            window.addEventListener('resize', function () {myChart.resize();});
        });
      }
      
              
  };
  
</script>

<style scoped>
#funnelChart {
    width: 100%;
    height: 100%;
}
</style>