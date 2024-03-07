<template>
    <header class="header">
        <div class="header_left">
            <h2><strong>年度词云展示</strong></h2>
            <p class="color_font"><small>Annual Word Cloud presentation</small></p>
        </div>
        <div class="nav">
            <ul> <li><i class="nav_7"></i><a >首页</a> </li>
                <li><i class="nav_8"></i><a >主界面</a> </li>
                <li><i class="nav_4"></i><a >退出</a> </li>
            </ul>
        </div>
    </header>
</template>
<script>
import '../../assets/css/base.css';
</script>

<style scoped>
.header {
    display: flex;
    height: 80px;
    width: 100%;
    margin-left: 0;
    background-color: #030829;
}

.header_left {
    margin-left: 5%;
    flex: 30%;
    height: 100%;
    color: #FFFFff;
    text-align: center;
    background-image: url("../../assets/img/logoBg.png");
    background-size: 100% 100%;
    font-family: "微软雅黑";
}
.nav {
    margin-left: 40%;
    flex: 35%;
    height: 80px;
}
.header_left h2{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px !important;
}
.color_font{
    color: #e8f7fe ;
    font-size: 12px ;
}
.nav > ul {
    display: flex;
    margin: 0;
}
.nav>ul>li{
    display: flex;
    flex: 3;
    text-align: center;
    height: 50px;
    line-height: 50px;
    padding: 5px;
    margin-top: 15px;
    box-sizing: border-box;
    /*box-shadow: -5px 0px 5px #034c6a inset, !*å·¦è¾¹é˜´å½±*!*/
    /*0px -5px 15px #034c6a inset, !*ä¸Šè¾¹é˜´å½±*!*/
    /*5px 0px 15px #034c6a inset, !*å³è¾¹é˜´å½±*!*/
    /*0px 5px 15px #034c6a inset;*/
    border-radius: 5px;

}
.nav>ul>li:hover{
    box-shadow: -10px 0px 15px #034c6a inset, /*å·¦è¾¹é˜´å½±*/
    0px -10px 15px #034c6a inset, /*ä¸Šè¾¹é˜´å½±*/
    10px 0px 15px #034c6a inset, /*å³è¾¹é˜´å½±*/
    0px 10px 15px #034c6a inset;

    box-sizing: border-box;
}
.nav>ul>li i{
    width: 16px;
    height: 16px;
    margin-left: 30px;
    margin-top: 12px;
}
.nav>ul>li>a{
    flex: 1;
    color: #ffffff;
    /*display: inline-block;*/
    /*padding: 0 15px 0 5px;*/
    font-size: 14px !important;
    margin-right: 20px;
    margin-top: -2px;
    overflow: hidden;
    user-select: none;
}
</style>