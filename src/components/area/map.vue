<template>
    <div id="map-container"></div>
</template>
<script>
    export default{
        mounted(){
            // SVG 文件的 URL
            var svgUrl = 'https://img.hcharts.cn/mapdata/countries/ru/ru-all.svg'; // 替换为你的 SVG 文件的 URL

            // 创建 SVG 容器
            var svgContainer = d3.select("#map-container").append("svg")
            .attr("width", '100%')
            .attr("height", '100%');
            
            // 使用 D3.js 加载 SVG 文件
            d3.xml(svgUrl).then(function(xml) {
                // 将 SVG 文件内容添加到 SVG 容器中
                var importedNode = document.importNode(xml.documentElement, true);
                svgContainer.node().appendChild(importedNode);
                // 获取包含地图区块的 <g> 元素
                const mapGroup = svgContainer.select("g");

                // 启用缩放功能
                svgContainer.call(d3.zoom()
                    .scaleExtent([0.2, 8])  // 设置缩放范围
                    .on("zoom", function(event) {
                        // 应用缩放和平移到 <g> 元素
                        mapGroup.attr("transform", event.transform);
                    })
                );
                // 添加鼠标悬浮效果
                svgContainer.selectAll("path") // 选择所有的地图区块
                    .attr("stroke", "#4f4343")
                    .attr("stroke-width", 1)
                    .on("mouseover",function(d,i){
                        // 获取区块的中心坐标
                        var bounds = this.getBBox();
                        var centerX = bounds.x + bounds.width / 2;
                        var centerY = bounds.y + bounds.height / 2;
                        d3.select(this)
                            .transition()
                            .duration(100)
                            .attr("stroke-width","3")
                            .attr("stroke", "yellow");
                    })
                    .on("mouseout",function(d,i){
                        d3.select(this)
                            .transition()
                            .duration(200)
                            .attr("stroke-width",1)
                            .attr("stroke", "#4f4343");
                });

            });
        }
    }

</script>
<style scoped>
#map-container {

    width: 100%;
    height: 100%;
}
</style>