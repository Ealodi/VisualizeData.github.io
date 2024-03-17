<template>
    <div class="div_any">
        <div class="div_any01_left">
            <div class="div_any_child">
                <div class="div_any_title"><img src="./src/assets/img/zhuxingduidietu.png">媒体新闻统计 </div>
                <Zzt />
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="./src/assets/img/yuanhuantu.png">新闻主题环图 </div>
                <Circle />
            </div>
        </div>
        <div class="div_any02">
            <Globe />
        </div>
        <div class="div_any01_right">
            <div class="div_any_child">
                <div class="div_any_title"><img src="./src/assets/img/meiguitu.png">重点人物玫瑰图 </div>
                <MeiGui />
                <!-- <div id="rose-chart" style="width: 100%; height: 100%;background-color: transparent;"></div> -->
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="./src/assets/img/ciyunguanli.png">热词词云 </div>
                <div id="char4" class="p_chart">
                    <wordcloud />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Wordcloud from './wordcloud.vue'
import Circle from './circle.vue'
import Globe from './globle.vue'
import Zzt from './zzt_mt.vue'
import MeiGui from './meigui.vue'
export default {
    components: {
        Wordcloud,
        Globe,
        Circle,
        Zzt,
        MeiGui
    },
    data() {
        return {
            scripts : []
        };
    },
    mounted() {
        const slider = document.createElement('script');
        const globe = document.createElement('script');
        slider.type = 'module';
        slider.async = true;
        slider.src = 'src/assets/js/slider.js?v=' + Math.random();

        globe.type = 'module';
        globe.async = true;
        globe.src = 'src/assets/js/app.js?v=' + Math.random();

        document.body.appendChild(slider);
        document.body.appendChild(globe);
        this.scripts.push(slider);
        this.scripts.push(globe);
    },
    beforeUnmount() {
        this.scripts.forEach(script => {
            document.body.removeChild(script);
        });
    },
}
</script>
<style scoped>
  
.div_height01{
    height: auto !important;
    padding: 5px;
}
.div_any02{
    width: 100wh;
    height: 100vh;
}
.div_any_child{
    width: 100%;
    height: 280px;
    box-shadow: none, /*å·¦è¾¹é˜´å½±*/
    0px -10px 15px #034c6a inset, /*ä¸Šè¾¹é˜´å½±*/
    10px 0px 15px #034c6a inset, /*å³è¾¹é˜´å½±*/
    0px 10px 15px #034c6a inset;
    border: 1px solid #a4c5d4;
    box-sizing: border-box;
    position: relative;
    margin-top: 25px;
}
.div_any_child01{
    width: 48%;

    box-shadow:none, /*å·¦è¾¹é˜´å½±*/
    0px -10px 15px #034c6a inset, /*ä¸Šè¾¹é˜´å½±*/
    10px 0px 15px #034c6a inset, /*å³è¾¹é˜´å½±*/
    0px 10px 15px #034c6a inset;
    border: 1px solid #034c6a;
    box-sizing: border-box;
    position: relative;
    margin-right: 2%;

}
.div_any_child01_wh{
    width: 98% !important;
}
.div_any_title{
    background-color: #86181800;
    border: 1px solid #a4c5d4;
    border-radius: 18px;
    position: absolute;
    height: 35px;
    width: 60%;
    top:-15px;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    left: 20%;
    line-height: 35px;
    text-align: center;
}
.div_any_title img{
    width: 18px;
    height: 18px;
    position: relative;
    top:2px;
    margin-right: 5px;
}
.div_any_child{
    width: 100%;
    height: 280px;
    box-shadow: none, /*å·¦è¾¹é˜´å½±*/
    0px -10px 15px #034c6a inset, /*ä¸Šè¾¹é˜´å½±*/
    10px 0px 15px #034c6a inset, /*å³è¾¹é˜´å½±*/
    0px 10px 15px #034c6a inset;
    border: 1px solid #a4c5d4;
    box-sizing: border-box;
    position: relative;
    margin-top: 25px;
}
.div_any{
    width: 98%;
    height: 100%;
}
.div_any01_left{
    width: 23%;
    margin-left: 2%;
    z-index: 1;
    position: absolute;
    top: 55%;
    left: 0;
    transform: translateY(-50%);
}
.div_any01_right{
    width: 23%;
    margin-right: 2%;
    z-index: 1;
    position: absolute;
    top: 55%;
    right: 0;
    transform: translateY(-50%);
}
</style>