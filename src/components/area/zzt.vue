<template>
  <div class="biaoge" id="chartmain" total="0"></div>
</template>



<script>
export default{
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
                        //panText.value = targetElement.innerText;
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
        loaddata(){
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
        $.getJSON('/src/assets/json/' + this.area +'.json', function(data) {
            data = data['t1'];
            var yMax = 0,total = 0
            data.forEach(element => {
                total += element;
                if (element > yMax)yMax = element;
            });
            d3.select('#chartmain')
                .attr('total',total);
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
                            color: '#000',
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
                            color: '#000',
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
                            color: '#000',
                        }
                    },
                    axisTick: {
                        show: false
                    },
    
                    axisLabel: {
                        textStyle: {
                            color: '#000',
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
                                color: '#252C38',
                                fontSize: 12
                            }
                        }
                    }

                ]
            };
            
            
            var myChart = echarts.init(document.getElementById('chartmain'));
        
            myChart.setOption(option);
        });
    
        }
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