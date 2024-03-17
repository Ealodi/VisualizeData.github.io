
readText("left");
readText("right");

window.addEventListener('resize', loadLeftBlock);
window.addEventListener('resize', loadRightBlock);
function loadLeftBlock() {
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
    reWritecircle();
}
function loadRightBlock() {
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
    reWritecircle();
}
function reWritecircle(){
    // 设置按钮参数
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
                connectCircles(".circle_left", this);
            } else {
                // 如果点击的是 left_circle，则连接所有 right_circle
                connectCircles(".circle_right", this);
            }
            d3.select(this).attr("fill", "lightcoral");
        });
}
function connectCircles(targetSelector, clickedCircle) {
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
}
// 从文件中读取文本
function readText(reaction){
    d3.text("data/"+ reaction +".txt").then(function(text) {
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
        if (reaction == 'left')loadLeftBlock();
        else loadRightBlock();
        replaceSpecialWord(reaction);
    });
}
function replaceSpecialWord(reaction) {
        // 使用 D3.js 选择所有 class 为 block_text 的元素
        var blockTexts = d3.selectAll("." + reaction +"-block");
        var headers = { 'Content-Type': 'text/csv; charset=utf-8' };
        // 遍历每个选中的元素并替换文本内容
        blockTexts.each(function() {
            const block = d3.select(this);
            d3.text('/data/' + reaction + '.csv', { headers: headers }).then(data => {
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
}