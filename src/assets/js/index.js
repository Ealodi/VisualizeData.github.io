$(function(){
    char1("2018-01");
    char2("2018-01");
    char3("2018-01");
    // 获取滑动条元素
    var slider = document.getElementById('slider');
    // 监听滑动条的变化
    slider.addEventListener('input', () => {
        const tooltip = document.getElementById("value-tooltip");
        const value = tooltip.textContent;
        char1(value);
        char3(value);
    });
})
function dateToMore(date) {
    var parts = date.split("-");
    var year = parts[0];
    var month = String(parseInt(parts[1], 10));
    return [year,month];
}
//统计分析图
function char1(date) {
    var dates = dateToMore(date);
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

        option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                textStyle : {
                    color : '#ffffff',
                },
                data: pieData.map(item => item.name),
            },
    
            calculable : false,
            series : [
                {
                    name:'新闻类型',
                    type:'pie',
                    center: ['40%', '50%'],
                    radius : ['40%', '70%'],
                    itemStyle : {
                        normal : {
                            label : {
                                show : false
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '15',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data: pieData,
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

function char2(date) {
    var myChart = echarts.init($("#char2")[0]);
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            show:'true',
            borderWidth:'0',
            left: '15%'
        },
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
                },
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

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})
}


function char3(date) {
    var dates = dateToMore(date);
    var year = dates[0];
    var month = dates[1];

    // 初始化 ECharts 实例
    var myChart = echarts.init($("#char3")[0]);

    // 指定图表的配置项和数据
    $.getJSON('/src/assets/json/mgt.json', function(data) {
        var tl = [];
        var countries = data[year][month];
        for (var country in countries) {
            tl.push({
                name: country,
                value: Math.log(countries[country])
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
                right: 0, // 位置
                x : 'right',
                textStyle : {
                    color : '#ffffff',
                },
                data: tl.map(item => item.name)
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


