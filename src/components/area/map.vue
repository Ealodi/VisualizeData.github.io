<template>
    <div id="map-container"></div>
</template>
<script>
    export default {
        mounted() {
            var svgUrl = 'https://img.hcharts.cn/mapdata/countries/ru/ru-all.svg';

            var svgContainer = d3.select("#map-container").append("svg")
                .attr("width", '100%')
                .attr("height", '100%');

            d3.xml(svgUrl).then(function (xml) {
                var importedNode = document.importNode(xml.documentElement, true);
                svgContainer.node().appendChild(importedNode);

                const mapGroup = svgContainer.select("g");

                svgContainer.call(d3.zoom()
                    .scaleExtent([0.2, 8])
                    .on("zoom", function (event) {
                        mapGroup.attr("transform", event.transform);
                    })
                );

                svgContainer.selectAll("path")
                    .attr("stroke", "#4f4343")
                    .attr("stroke-width", 1)
                    .style("fill", function (d) {
                        // Generate a random color and lower the saturation and brightness
                        var randomValue = Math.random();
                        var randomColor = d3.interpolateYlOrRd(randomValue);

                        // Lower the saturation and brightness
                        var hslColor = d3.hsl(randomColor);
                        hslColor.s = 0.5; // Lower saturation
                        hslColor.l = 0.6; // Lower brightness

                        return hslColor;
                    })
                    .on("mouseover", function (d, i) {
                        var bounds = this.getBBox();
                        var centerX = bounds.x + bounds.width / 2;
                        var centerY = bounds.y + bounds.height / 2;
                        d3.select(this)
                            .transition()
                            .duration(100)
                            .attr("stroke-width", "3")
                            .attr("stroke", "yellow");
                    })
                    .on("mouseout", function (d, i) {
                        d3.select(this)
                            .transition()
                            .duration(200)
                            .attr("stroke-width", 1)
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
