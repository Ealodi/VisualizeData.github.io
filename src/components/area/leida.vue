<template>
    <div id="main"></div>
</template>

<script>
    export default {
        mounted(){
              // 初始化 ECharts 实例
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;
        const lineStyle = {
            width: 1,
            opacity: 0.5
        };
        $.getJSON('/src/assets/json/area.json', function(data) {
            const transformedDataArray = Object.values(data["t3"]);
            option = {
                title: {
                
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                legend: {
                    bottom: 5,
                    data: ['Beijing'],
                    itemGap: 20,
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    selectedMode: 'single'
                },
                radar: {
                    indicator: [
                        { name: '时政', max: 1300 },
                        { name: '科技', max: 1300 },
                        { name: '军事', max: 1300 },
                        { name: '文体', max: 1300 },
                        { name: '财经', max: 1300},
                        { name: '其他', max: 1300 }
                    ],
                    shape: 'circle',
                    splitNumber: 5,
                    axisName: {
                        color: '#eee'
                    },
                    splitLine: {
                        lineStyle: {
                            color: [
                                'rgba(238, 197, 102, 0.1)',
                                'rgba(238, 197, 102, 0.2)',
                                'rgba(238, 197, 102, 0.4)',
                                'rgba(238, 197, 102, 0.6)',
                                'rgba(238, 197, 102, 0.8)',
                                'rgba(238, 197, 102, 1)'
                            ].reverse()
                        }
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(238, 197, 102, 0.5)'
                        }
                    }
                },
                series: [
                    {
                        
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: transformedDataArray,
                        symbol: 'none',
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#00BFFF' },  // 起始颜色
                                    { offset: 1, color: '#4169E1' }   // 结束颜色
                                ]
                            }
                        },
                        areaStyle: {
                            opacity: 0.1
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            option && myChart.setOption(option); 
            window.addEventListener('resize', function () {myChart.resize();});
        });
    }   
};

</script>
<style scoped>
#main {
    margin: auto;
    width: 100%;
    height: 100%;
}
</style>