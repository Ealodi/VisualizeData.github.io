<template>
  <div class="biaoge" id="chartmain"></div>
</template>



<script>
export default{
    mounted(){
        var option = {
						title: {
							text: ''
						},
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							textStyle: {
								color: '#fff',
								fontSize: 12,
							},
							right:'10%',
							data: ['折线一', '折线二']
						},
						grid:{
								x:40,
								y:40,
								x2:20,
								y2:20,
							},
						toolbox: {
							feature: {
								//saveAsImage: {}
							}
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							axisLabel: {
											/*inside: true,*/
											interval:0,
											textStyle: {
												color: '#fff',
												fontSize: 12
												
											}
										},
										axisTick: {
											show: false,
										},
										axisLine: {
											show: true,
											symbol:['none', 'arrow'],
											symbolOffset: 12,
											lineStyle:{
												color: '#fff',
											}
										},
							data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00']
						},
						yAxis: {
							type: 'value',
							
							axisLine: {
								show: true,
								symbol: ['none', 'arrow'],
								symbolOffset: 12,
								lineStyle:{
									color: '#fff',
								}
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								textStyle: {
									color: '#fff',
									fontSize: 12
								}
							}
						},
						series: [
							{
								name: '折线一',
								type: 'line',
								stack: '总量',
								data: [280, 102, 191, 134, 390, 230, 210],
								itemStyle: {
									 normal: {
									   color: "#0efdff",//折线点的颜色
									   lineStyle: {
									   color: "#0efdff",//折线的颜色
									   width:2,
									  }
									},
								},
                                
							},
							{
								name: '折线二',
								type: 'line',
								stack: '总量',
								data: [100, 132, 131, 234, 290, 330, 110]
							},
						]
		};
        var dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        var data = [269, 235, 237, 216, 227, 198, 219, 155, 173, 236, 224, 319];
        var yMax = 400;
        var dataShadow = [];
        
        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }
        
        option = {
            title: {
                text: '',
                subtext: ''
            },
            grid:{
                x:40,
                y:40,
                x2:20,
                y2:20,
                
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    /*inside: true,*/
                    interval:0,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                        
                    }
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    symbol:['none', 'arrow'],
                    symbolOffset: 12,
                    lineStyle:{
                        color: '#fff',
                    }
                },
                z: 10
            },
            yAxis: {
                type: 'value',
                name: '单位：条',
                axisLine: {
                    show: true,
                    symbol: ['none', 'arrow'],
                    symbolOffset: 12,
                    lineStyle:{
                        color: '#fff',
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        color: 'rgba(0,0,0,0.05)'
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    type: 'bar',
itemStyle: {
    color: '#188df0' // 将填充颜色设置为纯色，例如深蓝色
},
emphasis: {
    itemStyle: {
        color: '#2378f7' // 将强调样式的填充颜色设置为纯色，例如更深的蓝色
    }
}
,
                    data: data,
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        }
                    }
                }

            ]
        };
        
        
        var myChart = echarts.init(document.getElementById('chartmain'));
    
        myChart.setOption(option);
    }
    
            
};

</script>

<style scoped>
.biaoge{
	min-height:200px;
    width: 100%;
    height: 100%;
}
</style>