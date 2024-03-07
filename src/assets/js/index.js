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
        char2(value);
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
    var dates = dateToMore(date);
    var year = dates[0];
    var month = dates[1];

    var myChart = echarts.init($("#char2")[0]);
    $.getJSON('/src/assets/json/xwsjtj.json', function(data) {
        // 获取媒体的数组
        var medias = Object.keys(data);
        // 媒体对应的新闻类别的数量数组
        var categoryNewsCounts = {};
        var colors = ['#5793f3', '#d14a61', '#675bba', '#fd9c35', '#6cc788', '#7685a5'];
        // 遍历每个媒体
        medias.forEach(function (media) {
            // 获取每个媒体对应的新闻数量对象
            var mediaData = data[media][year][month];

            // 遍历新闻类别
            Object.keys(mediaData).forEach(function (category) {
                // 如果该新闻类别在 categoryNewsCounts 中不存在，则初始化为一个数组
                if (!categoryNewsCounts[category]) {
                    categoryNewsCounts[category] = [];
                }
                // 将当前媒体的该新闻类别数量添加到数组中
                if (category == "科技")mediaData[category] = Math.floor(mediaData[category] / 6);
                categoryNewsCounts[category].push(mediaData[category]);
            });
        });

        // 将 categoryNewsCounts 转换为数组形式
        var resultArray = Object.keys(categoryNewsCounts).map(function (category,index) {
            return {
                name: category,
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: false, position: 'insideRight'}},color: colors[index % colors.length]},
                data: categoryNewsCounts[category]
            };
        });
        //console.log(resultArray);
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
                left: '18%',
                top: 70,
                bottom: '10%',
            },
            legend: {
                data: ['国内', '国际','军事','社会','科技','娱乐'],
                textStyle : {
                    color : '#ffffff',
                },
                width : '80%'
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
                    type: 'category',
                    data: medias,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        },
                        // 控制显示的间隔
                        interval: 0
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            width: 0,
                            type: 'solid'
                        }
                    },
                }
            ],
            dataZoom: [
                {
                    type: 'slider',   // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                    orient: 'vertical',  // 设置为竖直方向
                    right: 0,           // 调整距离图表右侧的距离
                    top: 70,             // 调整距离图表顶部的距离
                    height: '60%',       // 设置高度，可以根据实际情况调整
                    start: 100,
                    end: 60,
                    minValueSpan: 4,
                    maxValueSpan: 4,
                    handleSize: 0,
                    width: 20,
                }
            ],
            series : resultArray,
        };

        myChart.setOption(option);
        window.addEventListener('resize', function () {myChart.resize();});

    });
    //滚轮事件
    var mouseWheelHandler = function (params) {
        var event = params.event;
        var deltaY = event.wheelDeltaY || event.deltaY;
        
        // 根据滚轮方向调整 dataZoom 的位置
        var zoomStart = myChart.getOption().dataZoom[0].start;
        var zoomEnd = myChart.getOption().dataZoom[0].end;
        var zoomStep = 10; // 调整的步长，可以根据实际情况调整
        
        if (deltaY < 0) {
            // 向下滚动
            if (zoomEnd > 40) {
                myChart.setOption({
                    dataZoom: [{
                        start: Math.max(0, zoomStart - zoomStep),
                        end: Math.min(100, zoomEnd - zoomStep),
                    }]
                });
            }
        } else {
            // 向上滚动
            if (zoomEnd < 100) {
                myChart.setOption({
                    dataZoom: [{
                    start: Math.max(0, zoomStart + zoomStep),
                    end: Math.min(100, zoomEnd + zoomStep),
                    }]
                });
            }   
        }
    }
    myChart.getZr().off('mousewheel');
    myChart.getZr().on('mousewheel', mouseWheelHandler);
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


