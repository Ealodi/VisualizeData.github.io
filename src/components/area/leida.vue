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

        // Schema:
        // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
        const dataBJ = [
            [55, 9, 56, 0.46, 18, 6, 1],
            // 其他数据省略...
        ];

        const lineStyle = {
            width: 1,
            opacity: 0.5
        };

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
                    { name: '时政', max: 100 },
                    { name: '科技', max: 200 },
                    { name: '军事', max: 50 },
                    { name: '文体', max: 3 },
                    { name: '财经', max: 100},
                    { name: '其他', max: 50 }
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
                    data: dataBJ,
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