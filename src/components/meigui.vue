<template>
    <div id="char3" class="p_chart"></div>
</template>
<script>
export default {
    mounted() {
        const tooltipDiv = document.getElementById('value-tooltip');
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.target === tooltipDiv) {
                    var tooltipText = tooltipDiv.innerText;
                    this.load(tooltipText);
                }
            }
        });
        observer.observe(tooltipDiv, { childList: true });
        this.load('2020-01');
    },
    methods :{
        dateToMore(date) {
            var parts = date.split("-");
            var year = parts[0];
            var month = String(parseInt(parts[1], 10));
            return [year,month];
        },
        load(date) {
            var dates = this.dateToMore(date);
            var year = dates[0];
            var month = dates[1];

            // 初始化 ECharts 实例
            var myChart = echarts.init($("#char3")[0]);

            // 指定图表的配置项和数据
            $.getJSON('/src/assets/json/person.json', function(data) {
                var tl = [];
                var countries = data[year][month];
                for (var country in countries) {
                    tl.push({
                        name: country,
                        value: countries[country]
                    });
                }
                var option = {
                    // title: {
                    //     text: '南丁格尔玫瑰图'
                    // },
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params) {
                            // params.data.value 包含了对应数据项的原始值
                            return `${params.name}: ${parseInt(Math.exp(params.data.value))} (${params.percent}%)`;
                        },
                        z: 2,
                    },
                    legend: { // 图例
                        orient: 'vertical', // 垂直布局
                        right: 2, // 位置
                        // x : 'right',
                        data: tl.map(item => item.name),
                        textStyle : {
                            color : '#ffffff',
                        },
                        
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            minAngle: 15, // 最小角度
                            startAngle: 250, // 起始角度
                            radius: [20, 120],  // 设置环形的内外半径
                            roseType: 'radius', // radius: 扇区圆心角展现数据的百分比，可用于展现一种维度的数据。 area: 所有扇区圆心角相同，仅通过半径展现数据大小。
                            label: {
                                show: false
                            },
                            labelLine: {
                                length: 0,  // 调整连接线的长度
                                smooth: 0.05,  // 调整连接线的弧度
                            },
                            emphasis : {
                                label : {
                                    show : true,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '11',
                                    },
                                }
                            },
                            data: tl
                        }
                    ]
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
.p_chart{
    height: 250px;
    width: 100%;
    position: absolute;
    z-index: 2;
    padding: 5px 2px;
    margin-top: 15px;
}
</style>