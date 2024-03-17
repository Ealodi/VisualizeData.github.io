<template>
    <div class="bg">
        <div class="left">
            <div class="countryMap area">
                <h3>国家地图</h3>
                <div class="biaoge" id="map">
                    <Map />
                </div>
            </div>
            <div class="info area">
                <div id="country">
                    <Country />
                </div>
                <div class="biaoge biaoge_pai" id="statics">
                    <Statistic />
                </div>
            </div>
        </div>
        <div class="right">
            <div class="leftArea">
                <div class="zzt area">
                    <h3>各月数据</h3>
                    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
                    <div class="biaoge" id="chartmain">
                        <Zhuzt />
                    </div>

                </div>
                <div class="loudou area">
                    <h3>主题词漏斗图 </h3>
                    <div class="biaoge biaoge_bi" id="loudou">
                        <Loudou />
                    </div>

                </div>
            </div>
            <div class="rightArea">
                <div class="leida area">
                    <h3>国家新闻分布</h3>
                    <div class="biaoge" id="chartmain_bing">
                        <Leida />
                    </div>

                </div>
                <div class="lunbo area">
                    <h3>实时新闻</h3>
                    <div class="biaoge" id="lbt">
                        <Lunbo />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Country from './country.vue'
import Lunbo from './lbt.vue'
import Leida from './leida.vue'
import Loudou from './loudou.vue'
import Map from './map.vue'
import Statistic from './statistic.vue'
import Zhuzt from './zzt.vue'
import * as d3 from 'd3'; // 导入 D3 库
export default {
    components: {
        Country,
        Lunbo,
        Leida,
        Loudou,
        Map,
        Statistic,
        Zhuzt
    }
}
</script>
<style scoped>
h3{
	font-size:14px;
	color:#fff;
	margin: 0;
}	
@-webkit-keyframes widthMove1 { 
	 0% {width:0%; } 
	 100% { width:98.5%; }
	 }
@-webkit-keyframes widthMove2 { 
	 0% {width:0%; } 
	 100% { width:88.5%; }
	 }
@-webkit-keyframes widthMove3 { 
	 0% {width:0%; } 
	 100% { width:68.5%; }
	 }
@-webkit-keyframes widthMove4 { 
	 0% {width:0%; } 
	 100% { width:40.5%; }
	 }
@-webkit-keyframes widthMove5 { 
	 0% {width:0%; } 
	 100% { width:22.5%; }
	 }
@-webkit-keyframes widthMove6 { 
	 0% {width:0%; } 
	 100% { width:10.5%; }
	 }
.area {
	position: relative;
	/* box-shadow: 5px 10px 10px #9f9f9f; */
    /* border: 1px solid #cbcbcb; */
	border: 1px solid #a4c5d4;
	padding: 5px;
	overflow: hidden;
}
.bg{
	display: flex;
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin-bottom: 10px;
	flex-wrap: nowrap;
    align-items: center; /* 垂直居中 */
}
.left .right {
	box-sizing: border-box;
}
/*左边栏*/
.bg .left {
	width: 42%;
	height: 95%;
	margin-left: 2%;
}
/*右边栏*/
.bg .right {
	display: flex;
	width: 55%;
	height: 95%;
}
.right .leftArea {
	display: flex;
	flex-direction: column;
	flex: 50%;
	height: 100%;
	margin-right: 1%;
	margin-left: 2%;
}
.right .rightArea {
	display: flex;
	flex-direction: column;
	flex: 48%;
	height: 100%;
}


/*地图下面的信息栏*/
.left .info {
	display: flex;
	margin-top: 2%;
	height: 25%;
	width: 95%;
}
#statics {
	justify-content: center;
	flex: 55%;
}
#country {
	flex: 40%;
}
/*地图栏*/
.left .countryMap {
	width: 95%;
	height: 69.3%;
}
/*柱状图*/
.zzt {
	width: 95%;
	flex: 52%;
}
/*漏斗图*/
.loudou {
	margin-top: 3%;
	width: 95%;
	flex: 42%;
}

.biaoge{
	width: 100%;
	height: 95%;
}

.rightArea .lunbo{
	border:0.008rem solid rgba(14,253,255,0.5);
	margin-top: 3%;
	width: 95%;
	flex: 38%;
	overflow:hidden;
}
.leida {
	width: 95%;
	flex: 56%;
}
</style>
