<template>
    <div id="radarChart" style="width: 100%; height: 100%;"></div>
</template>
  
  
  
<script setup>
import { onMounted,ref } from 'vue';
function loaddata(source){      
    const radarChart = echarts.init(document.getElementById('radarChart'));
      // 加载数据
      $.getJSON('/src/assets/json/' + source + '.json', function (data) {
        // 处理数据和配置项
        const transformedDataArray = Object.values(data["t3"]);
        const data_value = Object.values(transformedDataArray);
        var maxValue = 0;
        data_value.forEach(vl1 => {
          if (vl1 > maxValue)maxValue = vl1;
        }); 
        const option = {
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
              textStyle: {
        color: "#000", // 将字体颜色改为黑色
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
              { name: '财经', max: maxValue + 100 },
              { name: '时政', max: maxValue + 100 },
              { name: '科技', max: maxValue + 100 },
              { name: '军事', max: maxValue + 100 },
              { name: '文体', max: maxValue + 100 },
              { name: '其他', max: maxValue + 100 }
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
              value: data_value,
              symbol: "rect",
              symbolSize: 7,
              areaStyle: { color: "rgba(71,237,252,.3)" },
              lineStyle: {
                color: "#E86349",
                width: 1
              },
              label: {
                show: true,
                formatter: function (params) {
                  return params.value;
                },
                color: '#000',
              }
            }],
          }],
        };
        // 使用配置项设置雷达图
        radarChart.setOption(option);
      });
}
onMounted(()=>{
    loaddata('zhongxin');
    const targetElement = document.querySelectorAll('.el-select__selected-item.el-select__placeholder span')[1];
    if (targetElement) {
        const observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (targetElement.innerText == '中新网')loaddata('zhongxin');
                else loaddata('xinlang');
            }
            }
        });
        observer.observe(targetElement, { childList: true });
    }
});
</script>