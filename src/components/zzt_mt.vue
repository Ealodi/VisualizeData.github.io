<template>
    <div id="char2" class="p_chart"></div>
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
                var option = {
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
