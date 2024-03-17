<template>
    <div class="main_body">
        <div id="wordstream"></div>
        <div id="tree">
            <Tree />
        </div>
      </div>
</template>
<script>
import '/wordstream/styles/jquery-ui.css'
import '/wordstream/styles/msdropdown/dd.css'
import '/wordstream/styles/main.css'
import Tree from '../../components/wordstream/tree.vue'
export default {
    components :{
        Tree,
    },
    data() {
        return {
            scriptUrls : [
                'wordstream/lib/d3.min.js',
                'wordstream/lib/d3.v4.min.js',
                'wordstream/lib/loaddata.js',
                'wordstream/lib/d3.layout.wordstream.js',
                'wordstream/lib/d3.slider.js',
                'wordstream/lib/init.js'
            ],
            d3 :null
        };
    },
    mounted() {
        this.d3 = document.createElement('script');
        d3.async = true;
        d3.src = 'https://d3js.org/d3.v5.min.js';
        document.body.appendChild(this.d3);
        this.loadExternalScripts();
    },
    beforeUnmount() {
        this.removeExternalScripts();
        document.body.removeChild(this.d3);
    },
    methods: {
        loadExternalScripts() {
            this.scriptUrls.forEach(url => {
                const randomSuffix = Math.random();
                const script = document.createElement('script');
                url = url + `?v=${randomSuffix}`; // 使用随机数作为查询参数
                script.src = url;
                script.defer = true; // Load scripts asynchronously
                script.onload = () => {
                    console.log(`${url} loaded successfully.`);
                    // You can add additional logic here if needed
                };
                document.body.appendChild(script);
            });
        },
        removeExternalScripts() {
            this.scriptUrls.forEach(url => {
                    const scripts = document.body.querySelectorAll(`script[src^="${url}"]`);
                    scripts.forEach(script => {
                    script.remove();
                    console.log(`${url} removed.`);
                });
            });
        }
    }
}
</script>
<style>
.textData {
    user-select: none;
}
</style>
