<template>
    <div id="char1" class="p_chart"></div>
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
            
            var myChart = echarts.init($("#char1")[0]);
            $.getJSON('/src/assets/json/category.json', function(data) {
                // 将 JSON 数据转换为适用于 ECharts 饼图的格式
                var pieData = [];
                var newsData = data[year][month];

                for (var category in newsData) {
                    pieData.push({
                        name: category,
                        value: newsData[category]
                    });
                }
                var option = {
                    tooltip: {
                        trigger: 'item',
                        position: 'top-left',
                    },
                    grid: {
                        left: '10%',
                        containLabel: false,
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        textStyle: {
                            color: '#fff', // 设置所需的字体颜色（例如，红色）
                        },
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            left: 0,
                            radius: ['40%', '80%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                borderRadius: 10,
                                borderColor: '#fff',
                                borderWidth: 0
                            },
                            label: {
                                show: false,
                                position: 'center',
                                formatter: '{b}\n{d}%' // 显示名称和所占比例
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: pieData,
                            // 设置颜色
                            color: ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF','#800080', '#FF00FF'].map(color => `${color}99`)
                        }
                    ]
                };
            
                myChart.setOption(option);
                window.addEventListener('resize', function () {myChart.resize();})
            })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.error("Request Failed: " + err);
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
