<template>
    <div class="biaoge_listIn">
        <ul class="ul_title">
            <li>序号</li>
            <li>来源网站</li>
            <li>新闻名称</li>
            <li>时间</li>
            <li>类别三</li>
        </ul>
        <div class="ul_list">
            <div class="ul_listIn">
                <ul class="ul_con">
                    <li>张三</li>
                    <li>11</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                <ul class="ul_con">
                    <li>张三</li>
                    <li>12</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                <ul class="ul_con">
                    <li>张三</li>
                    <li>13</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                <ul class="ul_con">
                    <li>张三</li>
                    <li>14</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                <ul class="ul_con">
                    <li>张三</li>
                    <li>15</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                <ul class="ul_con">
                    <li>张三</li>
                    <li>16</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                 <ul class="ul_con">
                    <li>张三</li>
                    <li>11</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                <ul class="ul_con">
                    <li>张三</li>
                    <li>12</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                <ul class="ul_con">
                    <li>张三</li>
                    <li>13</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                 <ul class="ul_con">
                    <li>张三</li>
                    <li>14</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                 <ul class="ul_con">
                    <li>张三</li>
                    <li>15</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
                 <ul class="ul_con">
                    <li>张三</li>
                    <li>16</li>
                    <li>类别一</li>
                    <li>类别二</li>
                    <li>类别三</li>
                </ul>
            </div>
       </div>
   </div>
</template>
<script>
import '@/assets/area/js/jquery.numscroll';
import '@/assets/area/css/index.css';
export default {
    mounted() {
        $(".shu1").numScroll();
        $(".shu2").numScroll();
        $(".shu3").numScroll();
        $(".shu4").numScroll();
        $(".shu5").numScroll();
        $(".shu6").numScroll();
    }
}
</script>
<style scoped>
.biaoge_listIn {
    width: 100%;
    height: 100%;
}
ul{
	display:flex;
	display: -webkit-flex;
	width: 100%;
    margin: 0;
    padding: 0;
}	
.ul_title{
    margin-top: 5px;
	background: linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.5), rgba(255,255,255,0.1));
        background: -ms-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.5), rgba(255,255,255,0.1));
        background: -webkit-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.5), rgba(255,255,255,0.1));
        background: -moz-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.5), rgba(255,255,255,0.1));
}
ul {
    list-style: none;
}
.ul_con{
	border-bottom:0.008rem solid rgba(14,253,255,0.5);
    
}
ul li{
	width:20%;
	text-align:center;
	color:#fff;
	font-size:0.06rem;
	height:0.2rem;
	line-height:0.2rem;
}
ul li:frist-child {
	text-align: left;
}


</style>