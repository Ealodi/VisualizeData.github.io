<template>
    <div id="timeunder"></div>
</template>
<script>
export default {
    mounted() {
        this.$nextTick(() => {
        // 在 DOM 更新后执行操作
            this.load();
        });
    },
    methods :{
        load() {
            // 初始化 ECharts 实例
            var myChart = echarts.init(document.getElementById('timeunder'));
            var option;
            // 指定图表的配置项和数据
            $.getJSON('/src/assets/json/total.json', function(data) {
                const numbersArray = Object.values(data).flatMap(monthData =>
                    Object.values(monthData)
                );
                option = {
                    title: {
                
                    },
                    tooltip: {

                        
                    },
                    grid: {
                        top: '50%',
                        left: '1%',  // 调整左边距
                        right: '1%', // 调整右边距
                        containLabel: false,
                    },
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ['2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09','2020-10','2020-11','2020-12',
                                '2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09','2021-10','2021-11','2021-12',
                                '2022-01','2022-02','2022-03','2022-04','2022-05','2022-06','2022-07','2022-08','2022-09','2022-10','2022-11','2022-12',
                                '2023-01','2023-02','2023-03','2023-04','2023-05','2023-06','2023-07','2023-08','2023-09','2023-10','2023-11','2023-12'],
                        axisLine: {
                            show: false // 隐藏x轴线
                        },
                        axisTick: {
                            show: false // 隐藏x轴刻度
                        },
                        splitLine: {
                            show: false // 隐藏背景网格线
                        },
                        axisLabel: {
                            show: false // 隐藏y轴刻度上的数值
                        }

                    },
                    yAxis: {
                        axisLine: {
                            show: false // 隐藏y轴线
                        },
                        axisTick: {
                            show: false // 隐藏y轴刻度
                        },
                        splitLine: {
                            show: false // 隐藏背景网格线
                        },
                        axisLabel: {
                            show: false // 隐藏y轴刻度上的数值
                        }
                    },
                    series: [{
                        name: '数据量',
                        type: 'bar',
                        data: numbersArray,
                        itemStyle: {
                            color: 'steelblue'
                        }
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener('resize', function () {myChart.resize();});
            });
        }
    }
}
</script>
<style scoped>
#timeunder {
    position: absolute;
    z-index: 1;
    top: 94.5%;
    height: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
  }
</style>
