<template>
    <div id="radarChart" style="width: 100%; height: 100%;"></div>
</template>
  
  
  
  <script>
 
  
  export default{
      mounted(){
        var radarChart = echarts.init(document.getElementById('radarChart'));
        // 配置选项
        $.getJSON('/src/assets/json/area.json', function(data) {
            const transformedDataArray = Object.values(data["t3"]);
            var option = {
                backgroundColor: 'transparent',
                radar: {
                    center: ["50%", "50%"],
                    radius: '75%',
                    name: {
                        textStyle: {
                            color: "#fff",
                            fontSize: 12,
                            fontFamily: 'PingFangSC-Regular, PingFang SC;',
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#013A3F",
                        },
                    },
                    indicator: [
                        { name: '财经', max: 1300 },
                        { name: '时政', max: 1300 },
                        { name: '科技', max: 1300 },
                        { name: '军事', max: 1300},
                        { name: '文体', max: 1300 },
                        { name: '其他', max: 1300 }
                    ],
                    splitArea: {
                        show: false,
                        areaStyle: {
                            color: "rgba(255,0,0,0)",
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: "steelblue",
                        },
                    },
                },
                series: [{
                    name: "成绩单",
                    type: "radar",
                    data: [{
                        value: [648, 1097, 251, 1207, 50, 159],
                        symbol: "rect",
                        symbolSize: 7,
                        areaStyle: { color: "rgba(71,237,252,.3)" },
                        lineStyle: {
                            color: "#47EDFC",
                            width: 1
                        },
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value;
                            },
                            color:'#fff',
                        }
                    }],
                }],
            };
            // 使用配置项设置雷达图
            radarChart.setOption(option);
         });

      } 
  };
  
  </script>