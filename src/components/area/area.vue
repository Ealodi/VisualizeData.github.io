<template>
    <div class="left">
        <div class="countryMap area">
            <h3>国家地图</h3>
            <div class="biaoge" id="map"></div>
        </div>
        <div class="info area">
            <div id="country"></div>
            <div class="biaoge biaoge_pai" id="statics">
            </div>
        </div>
    </div>
    <div class="right">
        <div class="leftArea">
            <div class="zzt area">
                <h3>各月数据</h3>
                <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
                <div class="biaoge" id="chartmain"></div>

            </div>
            <div class="loudou area">
                <h3>主题词漏斗图 </h3>
                <div class="biaoge biaoge_bi" id="loudou">
                </div>

            </div>
        </div>
        <div class="rightArea">
            <div class="leida area">
                <h3>国家新闻分布</h3>
                <div class="biaoge" id="chartmain_bing"></div>

            </div>
            <div class="lunbo area">
                <h3>实时新闻</h3>
                <div class="biaoge" id="lbt">
                
                </div>

            </div>
        </div>
    </div>


</template>