<template>
  <div id="sunburst" style="width: 600px; height: 400px;"></div>
</template>

<script>
export default {
  mounted() {
    // 初始化 ECharts 实例
    var myChart = echarts.init(document.getElementById('sunburst'));

    // 指定图表的配置项和数据
    var option = {
      series: {
        type: 'sunburst',
        data: [
          {
            name: '情感分析',
            itemStyle: { color: '#ffcc33' }, // 情感分析的圈子颜色改为黄色
            children: [
              {
                name: '中性',
                value: 20,
                children: [
                  { name: '新华社', value: 1 },
                  { name: '人民日报', value: 1 },
                  { name: '央视新闻', value: 1 },
                  { name: '腾讯新闻', value: 1 },
                  { name: '今日头条', value: 1 },
                  { name: '网易新闻', value: 1 },
                  { name: '澎湃新闻', value: 1 },
                  { name: '凤凰新闻', value: 1 },
                  { name: '新浪新闻', value: 1 },
                  { name: '搜狐新闻', value: 1 },
                  { name: '知乎日报', value: 1 },
                  { name: '百度新闻', value: 1 },
                  { name: '微博新闻', value: 1 },
                  { name: '腾讯微博', value: 1 },
                  { name: '知乎新闻', value: 1 },
                  { name: '微信公众号', value: 1 },
                  { name: '今日热搜', value: 1 }
                ]
              },
              {
                name: '正面',
                value: 3,
                itemStyle: { color: '#55aaff' },
                children: [
                  { name: '哔哩哔哩', value: 1, itemStyle: { color: '#55aaff' } },
                  { name: '抖音热点', value: 1, itemStyle: { color: '#55aaff' } },
                  { name: '快手热点', value: 1, itemStyle: { color: '#55aaff' } }
                ]
              },
              {
                name: '负面',
                value: 15,
                itemStyle: { color: '#ff5a5a' },
                children: []
              }
            ]
          }
        ]
      }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>
