<template>
    <div id="funnelChart"></div>
</template>

<script>
export default {
    data() {
        return {
            area: 'zhongxin',
        };
    },
    mounted() {
        this.loaddata();
        const targetElement = document.querySelectorAll('.el-select__selected-item.el-select__placeholder span')[1];
        if (targetElement) {
            const observer = new MutationObserver(mutationsList => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        //spanText.value = targetElement.innerText;
                        if (targetElement.innerText == '中新网')this.area = 'zhongxin';
                        else this.area = 'xinlang';
                        this.loaddata();
                    }
                }
            });
            observer.observe(targetElement, { childList: true });
        }
    },
    methods: {
        loaddata() {
                    // 初始化 ECharts 实例
                var myChart = echarts.init(document.getElementById('funnelChart'));
                $.getJSON('/src/assets/json/' + this.area +'.json', function(data) {
                    const nameArray = Object.keys(data["t2"]);
                    const transformedDataArray = Object.entries(data["t2"]).map(([name, value]) => ({ name, value }));
                    var total = 0;
                    transformedDataArray.forEach(item => { total += item; });
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
                                color: '#000',
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
                                    formatter: function(params) {
                                        var percentage = (params.data.value / transformedDataArray[0].value) * 100;
                                        return `${percentage.toFixed(0)}%`;
                                    },
                                    color: '#000',
                                    position: 'inside' // 将占比显示在区块中间
                                },
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            var colorList = ['#CC301A', '#F1DC13', '#05299B', '#4EAAC1', '#222423', '#D69143'].map(color => `${color}B3`);
                                            return colorList[params.dataIndex % colorList.length];
                                        }
                                    }
                                }
                            }
                        ]
                    };

                    // 使用刚指定的配置项和数据显示图表
                    myChart.setOption(option);
                    window.addEventListener('resize', function() { myChart.resize(); });
                });
            
        }
    }
};
</script>

<style scoped>
#funnelChart {
    width: 100%;
    height: 100%;
}
</style>
