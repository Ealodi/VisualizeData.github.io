<template>
    <div ref="chart" style="width: 100%;height: 100%;"></div>
</template>
<script>
import echarts from 'echarts';
export default {
  data() {
    return {
      myChart: null,
    };
  },
  mounted() {
    // Initialize ECharts instance
    this.myChart = echarts.init(this.$refs.chart);

    // ECharts options
    const option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {show:'true',borderWidth:'0'},
        legend: {
            data:['财经', '时政','科技','军事','财经','财经'],
            textStyle : {
                color : '#ffffff',

            }
        },

        calculable :false,
        xAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#f2f2f2'],
                        width:0,
                        type:'solid'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['中国','美国','英国','法国'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        series : [
            {
                name:'财经',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: false, position: 'insideRight'}}},
                data:[320, 302, 301, 334]
            },
            {
                name:'时政',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: false, position: 'insideRight'}}},
                data:[120, 132, 101, 134]
            },
            {
                name:'科技',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: false, position: 'insideRight'}}},
                data:[220, 182, 191, 234]
            },
            {
                name:'军事',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: false, position: 'insideRight'}}},
                data:[150, 212, 201, 154]
            },
            {
                name:'社会',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: false, position: 'insideRight'}}},
                data:[150, 212, 201, 154]
            },
            {
                name:'文体',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: false, position: 'insideRight'}}},
                data:[150, 212, 201, 154]
            }
        ]
    };

    this.myChart.setOption(option);

    window.addEventListener('resize', () => {
      this.myChart.resize();
    });
  },
  beforeDestroy() {
    // Dispose of the ECharts instance to prevent memory leaks
    if (this.myChart) {
      this.myChart.dispose();
    }
  },
};
</script>

