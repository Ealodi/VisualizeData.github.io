<template>
    <header class="header left">
        <div class="header_center left">
            <h2><strong>年度词云展示</strong></h2>
            <p class="color_font"><small>Annual Word Cloud presentation</small></p>
        </div>
        <div class="right nav text_right">
            <ul> <li><i class="nav_7"></i><a >首页</a> </li>
                <li><i class="nav_8"></i><a >主界面</a> </li>
                <li><i class="nav_4"></i><a >退出</a> </li>
            </ul>
        </div>
    </header>
</template>
<style scoped>
.header{
    width: 100%;
    height: 10vh;
    background-color: #030829;
}
.header_center{
    position: absolute;
    left: 5%;
    width: 30%;
    margin: 0px auto;
    color: #FFFFff;
    text-align: center;
    background-image: url("../../assets/img/logoBg.png");
    background-size: 100% 100%;
    font-family: "微软雅黑";
}
.header_center h2{
   margin-top: 10px ;
    margin-bottom: 10px;
    font-size: 18px ;

}
.color_font{
    color: #e8f7fe ;
    font-size: 12px ;
}
.header_logo{
    margin-left: 1%;
    margin-top: 12px;

}
.header_logo img{
    height: 56px;
}
.nav{

    width: 35%;
}
.nav>ul>li{
    display: inline-block;
    width: 120px;
    text-align: center;
    height: 50px;
    position: relative;
    line-height: 50px;
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
    display: inline-block;
    position: relative;
    top:3px;
    margin-right: 5px;
}
.nav>ul>li>a{
    color: #ffffff;
    /*display: inline-block;*/
    /*padding: 0 15px 0 5px;*/
    font-size: 14px;
}
</style>