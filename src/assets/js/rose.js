// 初始化 ECharts 实例
var myChart = echarts.init(document.getElementById('rose-chart'));

// 指定图表的配置项和数据
var option = {
    // title: {
    //     text: '南丁格尔玫瑰图'
    // },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: { // 图例
        orient: 'vertical', // 垂直布局
        right: 10, // 位置
        top: 20,
        data: ['中国', '美国', '俄罗斯', '英国', '法国', '印度']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: [20, 140],  // 设置环形的内外半径
            roseType: 'radius', // radius: 扇区圆心角展现数据的百分比，可用于展现一种维度的数据。 area: 所有扇区圆心角相同，仅通过半径展现数据大小。
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 235, name: '中国'},
                {value: 274, name: '美国'},
                {value: 310, name: '俄罗斯'},
                {value: 335, name: '英国'},
                {value: 400, name: '法国'},
                {value: 200, name: '印度'}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);