<template>
    <div class="nav">
        <ul>
            <li class="nav_active nav_0"><i class="nav_1"></i>数据总览</li>
            <li class="nav_0"><i class="nav_2" id="nav_2"></i>主题对比</li>
            <li class="nav_0" id="select_nav"><i class="nav_3" id="nav_3"></i>文章对比</li>
        </ul>
    </div>
    <div class="header_center">
        <h2><strong>新闻舆情可视化对比系统</strong></h2>
        <p class="color_font"><small>News and public opinion visualization comparison system
</small></p>
    </div>
    <div class="nav">
        <ul> 
            <li class="nav_0"><i class="zt"></i>地区分析</li>
            <li class="nav_0"><i class="nav_8"></i>帮助  </li>
            <li class="nav_0"><i class="nav_4"></i>更多  </li>
        </ul>
    </div>
</template>

<script>
//import '../assets/css/base.css';
export default {

};
</script>
<style scoped>
.header_right ul {
    display: flex;
}
.nav_1{
    background-image: url("../assets/img/shouye1.png");
}
.nav_4{
    background-image: url("../assets/img/gengduo.png");
}
.nav_8{
    background-image: url("../assets/img/bangzhu.png");
}
.zt{
    background-image: url("../assets/img/zt.png");
}
.color_font{
    color: #e8f7fe ;
    font-size: 12px ;
}
.nav{
    flex: 35%;
}
.nav_active{
    border-bottom: 2px solid #4b8df8;
    box-shadow:none;
    box-sizing: border-box;
}
.nav_2{
    background-image: url("../assets/img/heliuduanmian.png");
}
.nav_3{
    background-image: url("../assets/img/duibi.png");
}
.header_center{
    flex: 30%;
    margin: 0px auto;
    color: #FFFFff;
    text-align: center;
    height: 80px;
    background-image: url("../asstes/img/13.png");
    background-size: 100% 100%;
    font-family: "微软雅黑";
}
.header_center h2{
   margin-top: 10px ;
    margin-bottom: 10px; ;
    font-size: 18px ;

}
.nav>ul>li {
    display: inline-block;
    width: 120px;
    text-align: center;
    height: 50px;
    position: relative;
    line-height: 50px;
    margin-top: 15px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 15px;
    margin-left: 15px;
    color: #fff;
    user-select: none;
}
.nav>ul>li:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }
.nav>ul>li:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
}
  
  .nav>ul>li:hover {
    box-shadow: 0 5px 15px rgba(31, 135, 161, 0.5);
    cursor: pointer;
  }
  
  .nav>ul>li:hover:before {
    border-color: #16b3ae;
    height: 100%;
    transform: translateX(0);
    transition: .1s transform linear, .1s height linear .1s;
  }
  
  .nav>ul>li:hover:after {
    border-color: #16b3ae;
    height: 100%;
    transform: translateX(0);
    transition: .1s transform linear, .1s height linear .1s;
  }
.nav>ul>li i{
    width: 16px;
    height: 16px;
    display: inline-block;
    position: relative;
    top:3px;
    margin-right: 5px;
    color: #ffffff;
    /*display: inline-block;*/
    /*padding: 0 15px 0 5px;*/
    font-size: 14px;
}
.li_ul{
    position: absolute;
    background-color: #16b3ae;
    width: 100%;
    /*border-top:4px solid #4b8df8;*/
    display: none;
    z-index: 999;

}
.li_ul li{
    line-height: 40px !important;
}
.li_ul li:hover{
    background-color: #16b3ae;
}

</style>
