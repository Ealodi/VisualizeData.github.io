<template>
    <div class="div_any">
        <div class="div_any01_left">
            <div class="div_any_child">
                <button class="div_any_title"><img src="../assets/img/zhuxingduidietu.png">媒体新闻统计 </button>
                <Zzt />
            </div>
            <div class="div_any_child">
                <button  class="div_any_title"><img src="../assets/img/yuanhuantu.png">新闻主题环图 </button >
                <Circle />
            </div>
        </div>
        <div class="div_any02">
            <Globe />
        </div>
        <div class="div_any01_right">
            <div class="div_any_child">
                <button  class="div_any_title"><img src="../assets/img/meiguitu.png">重点人物玫瑰图 </button >
                <MeiGui />
                <!-- <div id="rose-chart" style="width: 100%; height: 100%;background-color: transparent;"></div> -->
            </div>
            <div class="div_any_child">
                <button  class="div_any_title"><img src="../assets/img/ciyunguanli.png">热词词云 </button >
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
    border: 1px solid #F87B7E;
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
   /* background: #097f7b; */
   /* background: #F87B7E; */
   background: #E86349;
   border: 1px solid white;
   /* border-radius: 18px; */
   position: absolute;
   height: 35px;
   width: 60%;
   top:-15px;
   color: #ffffff;
   left: 20%;

   z-index: 1;
   --curve-size: .5em;
   padding: .5em 1.5em;
   font-size: 16px;
   border: 0;
   font-weight: bold;

margin-top: -105x; 
   text-align: center;
   clip-path: polygon(
       /* Top-left */
       0% var(--curve-size),

       var(--curve-size) 0,
       /* top-right */
       100% 0,
       100% calc(100% - var(--curve-size)),

       /* bottom-right 1 */
       calc(100% - var(--curve-size)) 100%,
       /* bottom-right 2 */
       0 100%);
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
    border: 1px solid black;
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