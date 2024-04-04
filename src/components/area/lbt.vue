<template>
        <div class="biaoge_listIn">
            <ul class="ul_title">
                <li>时间</li>
                <li>媒体</li>
                <li>新闻名称</li>
            </ul>
            <div class="ul_list">
                <div class="ul_listIn">
                    <ul v-for="(items, index) in listData" :key="index" class="ul_con" @click="navigateToUrl(index)" @mouseover="stopScroll" @mouseout="resumeScroll">
                        <li v-for="(item, subIndex) in items" :key="subIndex">
                            {{ item }}<!-- <a :href="getLink(items)">{{ item }}</a> -->
                        </li>
                    </ul>              
                </div>
            </div>
        </div>
</template>
<script>
import '@/assets/area/js/jquery.numscroll';
import '@/assets/area/css/index.css';
import axios from 'axios';

export default {
    data() {
        return {
            listData:[],
            sourceData:[],
            urls:[]
        };
    },
    mounted() {
        $(".shu1").numScroll();
        $(".shu2").numScroll();
        $(".shu3").numScroll();
        $(".shu4").numScroll();
        $(".shu5").numScroll();
        $(".shu6").numScroll();
        this.postData2();
        //this.postData2();
    },
    methods: {
        postData() {
            //fetch('/proxy/2019/07/gaiban/cmsdatainterface/page/news_1.jsonp?cb=news');
            // 发送GET请求
            axios.get('/api/2019/07/gaiban/cmsdatainterface/page/news_1.jsonp?cb=news')
                .then(response => {
                    // 处理响应数据
                    const substrings = JSON.parse(response.data.slice(5,-1))["data"]["list"];
                    substrings.forEach(async substring => {
                        var time = substring["focus_date"].slice(11);
                        var title = substring["title"];
                        var url = substring["url"];
                        var source;
                        await axios.get(url.replace("https://news.cctv.com/", "/api/")).then(response => {
                            var htmlString = response.data;
                            //console.log(htmlString);
                            var match = htmlString.match(/<meta\s+name="source"\s+content="([^"]+)">/);
                            // 如果找到匹配项，则获取 content 的值
                            if (!match)match = htmlString.match(/<span class="source">(.*?)<\/span>/);
                            source = match ? match[1] : null;
                        });
                        if (source == null)return;
                        var list = [time,source,title];
                        this.listData.push(list);
                        this.urls.push(url);
                    });

                });
        },
        hideMoreWords(str) {
            var result = str;
            if (str.length > 7){
                result = str.replace(0,10) + '...';
            }
            return result;
        },
        getLink(items) {
            // Use the last item in the array as the URL
            return items[items.length - 1];
        },
        stopScroll() {
            // 在鼠标悬浮时的处理逻辑
            $(".ul_listIn").css("animation-play-state", "paused");
            $(".ul_listIn").css("cursor", "pointer");
        },
        resumeScroll() {
            // 在鼠标移出时的处理逻辑
            $(".ul_listIn").css("animation-play-state", "running");
            $(".ul_listIn").css("cursor", "auto");
        },
        navigateToUrl(index) {
            const url = this.urls[index];
            // 使用路由导航或 window.location 跳转
            window.location.href = url;
        },
        postData2() {
            fetch("/api/getNews?keyword=%E4%BF%84%E4%B9%8C&curPage=1&sortField=1&searchFields=1&lang=cn", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                "cache-control": "max-age=0",
                "sec-ch-ua": "\"Microsoft Edge\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
            })
            .then(response => response.json())
            .then(data => {
                // Handle the returned data here
                var json_content = data["content"]["results"];
                json_content.forEach(newsInfo => {
                    var time = newsInfo["pubtime"].slice(0,11);
                    var title = newsInfo["title"].replace("<font color=red>","").replace("</font>","").replace("&nbsp;|&nbsp;","|");
                    var url = newsInfo["url"];
                    var source = newsInfo["sitename"];
                    var list = [time,source,title];
                    this.listData.push(list);
                    this.urls.push(url);
                });
                console.log(data);
            })
            .catch(error => {
                // Handle errors here
                console.error("Error fetching data:", error);
            });
        }
    }
}
</script>
<style scoped>
.biaoge_listIn {
    width: 100%;
    height: 100%;
}
ul{
	display: -webkit-flex;
	width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
}
ul li {
    text-align:center;
	color:#000000;
    user-select: none;
	font-size:0.06rem;
	height:0.2rem;
	line-height:0.2rem;
    overflow: hidden;
}
ul li:nth-child(1) {
    width: 20%; /* 2/(2+2+6) = 20% */
}
  
ul li:nth-child(2) {
    width: 25%; /* 2/(2+2+6) = 20% */
}
  
ul li:nth-child(3) {
    width: 55%; /* 6/(2+2+6) = 60% */
    overflow: hidden; /* 隐藏超出部分 */
    text-overflow: ellipsis; /* 使用省略号表示溢出的文本 */
}

/* .ul_title {
    margin-top: 5px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));
    background: -ms-linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));
    background: -webkit-linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));
    background: -moz-linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));
} */
.ul_title {
    margin-top: 5px;
    background: linear-gradient(to right, rgba(232, 99, 73, 0.5), rgba(126, 16, 6, 0.8), rgba(232, 99, 73, 0.5));
    background: -ms-linear-gradient(to right, rgba(232, 99, 73, 0.5), rgba(126, 16, 6, 0.8), rgba(232, 99, 73, 0.5));
    background: -webkit-linear-gradient(to right, rgba(232, 99, 73, 0.5), rgba(126, 16, 6, 0.8), rgba(232, 99, 73, 0.5));
    background: -moz-linear-gradient(to right, rgba(232, 99, 73, 0.5), rgba(126, 16, 6, 0.8), rgba(232, 99, 73, 0.5));
}


.ul_con{
	border-bottom:0.008rem solid #213271;
    
}
.ul-title {
    width: 20%;
}

ul li:frist-child {
	text-align: left;
}
.biaoge_listIn .ul_list{
	overflow: hidden;
	position: relative;
	height: 100%;
}
.biaoge_listIn .ul_listIn{
	-webkit-animation: 14s gundong linear infinite normal;
    animation: 14s gundong linear infinite normal;
    position: relative;
	top: 0;
}
@keyframes gundong {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    100% {
        -webkit-transform: translate3d(0, -30vh, 0);
        transform: translate3d(0, -30vh, 0);
    }
}


</style>