/**
 * Created by 30947 on 2018/7/18.
 */
$(function(){

    char1();
    char2();
    char3();
    char4();
    char5();
})

//统计分析图
function char1() {

    var myChart = echarts.init($("#char1")[0]);

    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            textStyle : {
                color : '#ffffff',

            },
            data:['客运车','危险品车','网约车','学生校车']
        },

        calculable : false,
        series : [
            {
                name:'车类型',
                type:'pie',
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
                                fontSize : '20',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:335, name:'客运车'},
                    {value:310, name:'危险品车'},
                    {value:234, name:'网约车'},
                    {value:135, name:'学生校车'}

                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char2() {

    var myChart = echarts.init($("#char2")[0]);

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {show:'true',borderWidth:'0'},
        legend: {
            data:['行驶', '停车','熄火','离线'],
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
                data : ['客运车','危险品车','网约车','学生校车'],
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
                name:'行驶',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[320, 302, 301, 334]
            },
            {
                name:'停车',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[120, 132, 101, 134]
            },
            {
                name:'熄火',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[220, 182, 191, 234]
            },
            {
                name:'离线',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201, 154]
            }

        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char3() {
// 初始化 ECharts 实例
var myChart = echarts.init($("#char3")[0]);

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

}
function char4() {

    var myChart = echarts.init($("#char4")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['客运车','危险品车','网约车','学生校车'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'报警数量',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[2900, 1200, 300, 200, 900, 300]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char5() {

    var myChart = echarts.init($("#char5")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['客运车','危险品车','网约车','学生校车'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'报警数量',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[2900, 1200, 300, 200, 900, 300]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}