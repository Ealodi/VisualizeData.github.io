<template>
    <div class="wave">
      <div class="cardArea">
        <div class="card">
          <img src="./images/img1.jpg" alt="img1">
          <div class="card_content">
            <p class="card_title">福岛核污染水再次泄漏印证了三个判断</p>
            <p class="card_description"> 来源：中国新闻网</p>
            <p class="card_description"> 时间：2023/12/1</p>
          </div>
    
          
        </div>
        <Button @click="changeView" />
        <div class="card">
          <img src="./images/img2.jpg" alt="img2">
          <div class="card_content">
            <p class="card_title">这起事故戳穿了日方关于核污染水的两个谎言</p>
            <p class="card_description"> 来源：澎湃新闻</p>
            <p class="card_description"> 时间：2023/12/9</p>
          </div>
        </div>
      </div>
      <div class="container4">
        <div id="card3"></div>
        <div class="two" id="paintArea">
          <div class="circles"></div>
        </div>
        <div id="card4"></div>
      </div>
      </div>
</template>
<script>
import * as d3 from 'd3'; // 导入 D3 库
import Button from './button.vue'
import * as echarts from 'echarts'
export default {
  data() {
    return {
      viewNow :0
    };
  },
  components: {
    Button
  },
  mounted() {
    // this.mkCenter();
    this.loadCircle('kw');
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.loadLeftBlock);
    window.removeEventListener('resize', this.loadRightBlock);
  },
  methods: {
    loadCircle(kwOrPa) {
      this.readText("left",kwOrPa);
      this.readText("right",kwOrPa);
      window.addEventListener('resize', this.loadLeftBlock);
      window.addEventListener('resize', this.loadRightBlock);
    },
    changeView() {      
      if (this.viewNow == 0){
        const midArea = d3.select(".circles");
        midArea.selectAll("*").remove();
        midArea.classed('lineTog',true);
        midArea.classed('circles',false);
        this.loadCircle('pa');
        this.viewNow = 1;
        var line1 = midArea
                    .append('div')
                    .attr("class", "line");
        var line2 = midArea
                    .append('div')
                    .attr("class", "line");
        line1.node().style.width = '50%';
        line2.node().style.width = '50%';
        const height1 = document.getElementById("card3").offsetHeight;
        const height2 = document.getElementById("card4").offsetHeight;
        line1.node().style.height = height1 + 'px';
        line2.node().style.height = height2 + 'px';
        var chart1 = echarts.init(line1.node());
        var chart2 = echarts.init(line2.node());
        

        var option1 = {
            grid: {
                top: '5%',
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLabel: {
                    rotate: 90
                }
            },
            yAxis: {
                type: 'category',
                data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5','Category 6','Category 7','Category 8','Category 9',]
            },
            series: [{
                type: 'line', // 将图表类型改为折线图
                data: [150, 200, -350, 400, 500,-200,100,40,300]
            }]
        };
        chart1.setOption(option1);

        var option2 = {
            grid: {
                  top: '5%',
            },
            xAxis: {
                type: 'value',
                position: 'top',
                inverse: true, // 反向显示 x 轴刻度
                axisLabel: {
                    rotate: 90
                }
            },
            yAxis: {
                type: 'category',
                data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5','Category 6','Category 7','Category 8','Category 9',]
            },
            series: [{
                type: 'line', // 将图表类型改为折线图
                data: [0, 100, -250, 22, 500,-200,100,40,300]
            }]
        };
        chart2.setOption(option2);
      }
      else {
        const midArea = d3.select(".lineTog");
        midArea.selectAll("*").remove();
        midArea.classed('lineTog',false);
        midArea.classed('circles',true);
        this.viewNow = 0;
        this.loadCircle('kw');
      }
    },
    readText(reaction,kwOrPa) {
      // 读取文本逻辑
      d3.text("/comparison/data/"+ reaction +".txt").then(text => {
        // 按行分割文本
        var lines = text.split("\n");
        var cards = reaction == 'left' ? '#card3' : '#card4';
        
        // 为每一行创建文字段
        d3.select(cards).selectAll("div")
            .data(lines)
            .enter()
            .append("div")
            .attr("class", reaction + "-block block_text")
            .text(function(d) { return d; }); // 设置文本内容
        if (kwOrPa == 'kw'){
          if (reaction == 'left')this.loadLeftBlock();
          else this.loadRightBlock();
          this.replaceKeyWords(reaction);
        }
        else this.replaceSpecialWord(reaction);
      });
    },
    loadLeftBlock() {
      const circleElements = document.querySelectorAll(".circle_left");
      if (circleElements.length != 0){
          circleElements.forEach(function (circleElement) {
              circleElement.parentNode.removeChild(circleElement);
          });
      }
      // 获取所有 class 为 "left-block" 的元素
      const leftBlocks = document.querySelectorAll(".left-block");
      const containerTwo = document.querySelector(".circles");
      let y = 0;
      // 遍历每个 left-block 元素
      leftBlocks.forEach(function (leftBlock) {
          const height = leftBlock.offsetHeight;
          
          // 创建一个圆形元素
          const circle = document.createElement("svg");
          circle.classList.add("circle_left","circle");
          circle.style.top = y + height / 2  - 10 + 'px';
          //console.log("y:" + y + " height:" + height + " top:" + circle.style.top);
          y += height + 20;
          // 将圆形元素添加到容器 "two" 中
          containerTwo.appendChild(circle);
      });
      this.reWritecircle();
    },
    loadRightBlock() {
      const circleElements = document.querySelectorAll(".circle_right");
      if (circleElements.length != 0){
          circleElements.forEach(function (circleElement) {
              circleElement.parentNode.removeChild(circleElement);
          });
      }
      // 获取所有 class 为 "left-block" 的元素
      const leftBlocks = document.querySelectorAll(".right-block");
      const containerTwo = document.querySelector(".circles");
      let y = 0;
      // 遍历每个 left-block 元素
      leftBlocks.forEach(function (leftBlock) {
          const height = leftBlock.offsetHeight;
          
          // 创建一个圆形元素
          const circle = document.createElement("svg");
          circle.classList.add("circle_right","circle");
          circle.style.top = y + height / 2  - 10 + 'px';
          //console.log("y:" + y + " height:" + height + " top:" + circle.style.top);
          y += height + 20;
          // 将圆形元素添加到容器 "two" 中
          containerTwo.appendChild(circle);
      });
      this.reWritecircle();
    },
    reWritecircle() {
      const vm = this;
      // 重写圆圈逻辑
      d3.selectAll(".circle")
          .on("mouseover", function () {
              d3.select(this).transition().duration(200).attr("r", 15);
          })
          .on("mouseout", function () {
              d3.select(this).transition().duration(200).attr("r", 10);
          })
          .on("click", function () {
              const circleClass = d3.select(this).attr("class").split(" ")[0];
              if (circleClass === "circle_right") {
                  // 如果点击的是 right_circle，则连接所有 left_circle
                  vm.connectCircles(".circle_left", this);
              } else {
                  // 如果点击的是 left_circle，则连接所有 right_circle
                  vm.connectCircles(".circle_right", this);
              }
              d3.select(this).attr("fill", "lightcoral");
          });
    },
    connectCircles(targetSelector, clickedCircle) {
      // 连接圆圈逻辑
      const container = d3.select("#paintArea");
      const targetCircles = container.selectAll(targetSelector);
      const clickedX = parseFloat(clickedCircle.offsetLeft);
      const clickedY = parseFloat(clickedCircle.offsetTop);
      const clickedWidth = parseFloat(clickedCircle.offsetWidth);
      const clickedHeight = parseFloat(clickedCircle.offsetHeight);
      console.log(clickedCircle.offsetTop);
      // 获取父元素的宽度和高度
      const parentWidth = container.node().offsetWidth;
      const parentHeight = container.node().offsetHeight;
      d3.select("#lineSvg").remove();
      // 在父元素内创建 SVG 元素
      const svg = container.select("div").append("svg")
          .attr("width", parentWidth)
          .attr("height", parentHeight)
          .attr("id","lineSvg");
      targetCircles.each(function () {
          const targetX = parseFloat(this.offsetLeft);
          const targetY = parseFloat(this.offsetTop);
          const targetWidth = parseFloat(this.offsetWidth);
          const targetHeight = parseFloat(this.offsetHeight);
          // 使用直线生成器创建一条线段
          var line = d3.line()
              .x(function(d) { return d.x; })
              .y(function(d) { return d.y; });
          // 两个点的坐标
          var startPoint = { x: clickedX + clickedWidth / 2, y: clickedY + clickedHeight / 2};
          var endPoint = { x: targetX + targetWidth / 2, y: targetY + targetHeight / 2};
          // 数据数组包含起始点和结束点
          var data = [startPoint, endPoint];
          svg.selectAll('.circle')
              .attr('stroke', 'white')
              .attr('stroke-width', 2);
          svg.append("path")
              .data([data])
              .attr("class", "connecting-line")
              .attr('d', line)
              .attr('stroke', 'black')
              .attr('stroke-width', 1)
              .transition()
              .delay(function(d, i) { return i * 200; }) // 每条线段的延迟时间
              .duration(200) // 动画持续时间
              .attrTween("d", function(d) {
                  const interpolate = d3.interpolate(d[0], endPoint); // 插值函数
                  return function(t) {
                      data[1] = interpolate(t); // 更新终点坐标
                      return line(data); // 返回插值后的路径
                  };
              })
              .on("end", function(d, i) {
                  // 动画结束后的操作，可根据需要添加
                  if (i === data.length - 1) {
                      console.log("Animation complete!");
                  }
              });
      });
    },
    replaceSpecialWord(reaction) {
      // 替换特殊词逻辑
        // 使用 D3.js 选择所有 class 为 block_text 的元素
        var blockTexts = d3.selectAll("." + reaction +"-block");
        var headers = { 'Content-Type': 'text/csv; charset=utf-8' };
        // 遍历每个选中的元素并替换文本内容
        blockTexts.each(function() {
            const block = d3.select(this);
            d3.text('/comparison/data/' + reaction + '.csv', { headers: headers }).then(data => {
                var rows = d3.csvParseRows(data);
                var text = block.text();
                rows.forEach(function(row){
                    const word = row[0];
                    var sta = row[2];
                    if (sta == '消极')sta = 'negative';
                    else sta = 'positive';
                    text = text.replace(new RegExp(word, 'g'), '<span class="' + sta + '">' + word + '</span>');
                });
                block.html(text);
            });
          });
    },
    replaceKeyWords(reaction) {
      var blockTexts = d3.selectAll("." + reaction +"-block");
      blockTexts.each(function() {
        const block = d3.select(this);
        d3.json('/comparison/data/topic.json').then(data => {
            const left_blocks = data[reaction];
            left_blocks.forEach(block_keywords => {
                var text = block.text();
                block_keywords.forEach(kw => {
                  text = text.replace(new RegExp(kw, 'g'), '<span class="keyword">' + kw + '</span>');
                });
                block.html(text);
            });
        });
      });
    }
  }
};
</script>
<style>
.keyword {
  background-color: grey;
  color: white;
  user-select: auto;
  border-radius: 10%;
}
.block_text {
  display: inline-block;
  word-wrap: break-word; /* 实现文字长度达到边界时的强制换行处理 */
  text-indent: 2em;
  text-align: left;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 14px;
  border: 1px solid #000;
  box-sizing: border-box; /* 让边框计入宽度和高度 */
  margin-bottom: 20px;
  user-select: none;
}
.left-block {
  margin-left: 2%;
}
.right-block {
  margin-right: 2%;
}
.circle {
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: steelblue;
  cursor: pointer;
  transition: transform 0.3s ease; /* 添加过渡效果 */
}
.circle_left {
  position: absolute;
  left: 2px;
}
.circle_right {
  position: absolute;
  right: 2px;
}
.circle:hover {
  transform: scale(1.2); /* 悬浮时的效果 */
}
#lineSvg {
  overflow: visible; /* 允许超出边界 */
}
.positive {
  background-color: rgb(31, 200, 31);
  color: white;
  user-select: auto;
  border-radius: 10%;
}
.negative {
  background-color: rgb(255, 81, 0);
  color: white;
  user-select: auto;
  border-radius: 10%;
}
.block_text span:hover {
  cursor: pointer; /* 悬浮时的鼠标指针样式 */
  background-color: steelblue;
}
.connecting-line :hover{
  stroke-width: 2px;
}
.circles {
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
<style scoped>
.lineTog {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.example-2 {
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
}
.line {
  width: 50%;
  height: 100%;
}
.card img {
  width: 60%;
  width: 60%;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card {
  position: relative;
  width: 300px;
  height: 160px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px black;
}
.card_content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card:hover .card_content{
  transform: rotateX(0deg);
  width: 100%;
}
.card:hover svg{
  scale: 0;
}
.card_description {
  margin: 10px 0 0;
  font-size: 14px;
  color: black;
  line-height: 1.4;
}
.card_title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}
.cardArea {
  display: flex;
  width: 100%;
  height: 160px;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
}
.container4 {
  display: flex;
  flex: 1;
  width: 100%;
}

.wave {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(90deg, #3498DB, #E67E22); */
  background-color: rgb(255, 255, 255);
  opacity: 0.5;
  font-family: Arial, sans-serif;
  overflow-y: auto;
}
#card3 {
  flex: 30%;
  margin-left: 5%;
}

.two {
  flex: 1;
}

#card4 {
  flex: 30%;
  margin-right: 5%;
}

.two div {
  flex: 1;
  /* border: 1px solid #000; */
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 190px; /* 调整SVG图标宽度 */
  height: 190px; /* 调整SVG图标高度 */
}

.icon2 {
  width: 190px; /* 调整SVG图标宽度 */
  height: 190px; /* 调整SVG图标高度 */
  transform: scaleX(-1); /* 实现水平镜像 */
}
</style>