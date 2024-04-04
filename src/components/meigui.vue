<template>
    <div id="char3" class="p_chart"></div>
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

            // 初始化 ECharts 实例
            var myChart = echarts.init($("#char3")[0]);

            // 指定图表的配置项和数据
            $.getJSON('/src/assets/json/person.json', function(data) {
                var tl = [];
                var countries = data[year][month];
                for (var country in countries) {
                    tl.push({
                        name: country,
                        value: countries[country]
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
                            return `${params.name}: ${params.data.value} (${params.percent}%)`;
                        },
                        z: 2,
                    },
                    legend: { // 图例
                        orient: 'vertical', // 垂直布局
                        right: 2, // 位置
                        // x : 'right',
                        data: tl.map(item => item.name),
                        textStyle : {
                            color : 'black',
                        },
                        
                    },
                    series: [
        {
            name: '访问来源',
            type: 'pie',
            minAngle: 15,
            startAngle: 250,
            radius: [20, 120],
            roseType: 'radius',
            label: {
                show: false
            },
            labelLine: {
                length: 0,
                smooth: 0.05,
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'center',
                    textStyle: {
                        fontSize: '11',
                    },
                }
            },
            data: tl,
            // 修改颜色和透明度
            // color: ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF']
            
         
           
           
            color: [ '#F1DC13', '#05299B','#5FA042', '#4EAAC1', '#DF9F3E','#CC301A' ,'#E64163','#365535']




            // color: ['#403990', '#80A6E2', '#FBDD85', '#F46F43', '#CF3D3E', '#513C2C']
// color: ['#536DE8', '#91A3BB', '#A0C1D4', '#B4CFE2', '#DAD8E5', '#0000FF']
            // color: ['#1B1B1E', '#373F51', '#58A4B0', '#A9BCD0', '#D8DBE2', '#0000FF']
             // 
            // color: ['#EB7F00', '#F3FFE2', '#ACF0F2', '#1695A3', '#225378', '#0000FF']

        }
    ]
};
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener('resize', function () {myChart.resize();});
            });
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
