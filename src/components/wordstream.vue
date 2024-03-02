<template>
    <div id="wordstream">
        <div id="loadingSpinner">
            <!-- <span id="progressText"> -->
        </div>
        <svg id="topsvg" class="mainsvg">
            <g id="xGridlinesGroup"></g>
            <g id="main"></g>
            <g id="legend"></g>
        </svg>
        <g id="axisGroup"></g>
        <svg id="bottomsvg" class="mainsvg">
            <g id="xGridlinesGroup"></g>
            <g id="main"></g>
            <g id="legend"></g>
        </svg>
    </div>
</template>

<script>
export default {
    data() {
        return {
            initialDataset: "test",
            initialDataset2: "test2",
            categories: ["category"],
            fileName: "",
            opacity: null,
            layerPath: null,
            maxFreq: null,
            axisGroup: null,
            xGridlinesGroup: null,
            mainGroup: null,
            legendGroup: null,
            svg: null,//上词流
            spinner: null,
            maxWidth: 2000,
            maxHeight: 2000,
            maxTop: 50,
            totalData: null,
            initTop: 15,
        };
    },
    mounted() {
        this.svg = d3.select("#topsvg");
        this.axisGroup = this.svg.select("#axisGroup");
        this.xGridlinesGroup = this.svg.select("#xGridlinesGroup");
        this.mainGroup = this.svg.select("#main");
        this.legendGroup = this.svg.select("#legend");
        
        this.loadData();
    },
    methods: {

    }
}
</script>

<style scoped>
.mainsvg {
    width: 100%;
    height: 40%;
}
</style>