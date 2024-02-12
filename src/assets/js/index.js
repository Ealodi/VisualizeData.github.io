$(function(){

    char1();
    char2();
    char3();
    char4();
})



//统计分析图
function char1() {

    var myChart = echarts.init($("#char1")[0]);

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
            data:['财经','时政','科技','军事','生活','社会','文体','其他']
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
                data:[
                    {value:335, name:'财经'},
                    {value:310, name:'时政'},
                    {value:234, name:'科技'},
                    {value:135, name:'军事'},
                    {value:135, name:'生活'},
                    {value:105, name:'社会'},
                    {value:125, name:'文体'},
                    {value:15, name:'其他'}
            
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
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            z: 2,
        },
        legend: { // 图例
            orient: 'vertical', // 垂直布局
            right: 0, // 位置
            x : 'right',
            textStyle : {
                color : '#ffffff',
            },
            data: ['中国', '美国', '俄罗斯', '英国', '法国', '印度']
        },

        series: [
            {
                name: '访问来源',
                type: 'pie',
                minAngle: 15, // 最小角度
                startAngle: 90, // 起始角度
                radius: [20, 120],  // 设置环形的内外半径
                roseType: 'radius', // radius: 扇区圆心角展现数据的百分比，可用于展现一种维度的数据。 area: 所有扇区圆心角相同，仅通过半径展现数据大小。
                label: {
                    show: false
                },
                labelLine: {
                    length: 5,  // 调整连接线的长度
                    smooth: 0.2,  // 调整连接线的弧度
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '12',
                        },
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
window.addEventListener('resize', function () {myChart.resize();})

}


function char4() {
    
 
}
