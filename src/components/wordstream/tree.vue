<template>
  <div class="select">
      <div class="Newselect" id="select1">
          <el-select
          v-model="value"
          placeholder="Select"
          size="large"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
          <li v-for="item in tops" :key="item" class="infinite-list-item"><p>{{ item }}</p></li>
        </ul>
      </div>
      <el-button type="primary">
        开始对比<el-icon class="el-icon--right"><ArrowRight /></el-icon>
      </el-button>
      <div class="Newselect" id="select2">
        <el-select
        v-model="value2"
        placeholder="Select"
        size="large"
        style="width: 240px"
      >
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="item in bottoms" :key="item" class="infinite-list-item"><p>{{ item }}</p></li>
      </ul>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
const value = ref('新浪新闻')
const value2 = ref('澎湃新闻')
const options = [
  {
    value: 'Option1',
    label: '新浪新闻',
  },
  {
    value: 'Option2',
    label: '腾讯新闻',
  },
  {
    value: 'Option3',
    label: '中新网',
  }
]
const options2 = [
  {
    value: 'Option1',
    label: '澎湃新闻',
  },
  {
    value: 'Option2',
    label: '新华网',
  },
  {
    value: 'Option3',
    label: '网易新闻',
  }
]
const tops = [
    "亮眼数据勾勒“植”此青绿成绩单 逐绿而行擦亮高质量发展底色",
    "外交部：奉劝某些域外国家不要挑事生非 不要成为南海的搅局者和肇事方",
    "中国饭店协会倡议住宿企业便捷国际卡支付",
    "全国多地排查“九小场所”消防安全隐患 保障群众生命财产安全",
    "“实”字扑面干劲足 中国式现代化美好图景将一步步变为现实",
    "新华社社评：凝心聚力创伟业 真抓实干谱新篇——热烈祝贺十四届全国人大二次会议胜利闭幕",
    "这起事故戳穿了日方关于核污染水的两个谎言",
    "习近平两会到团组深入谈“新”",
    "安哥拉总统洛伦索将访华",
    "外资企业密集“加仓” 中国仍是全球最佳投资沃土",
    "将春味涮进火锅里！春日“新型消费”活跃 “点亮”消费新空间",
    "沈阳通报11人身体不适被送医：疑似地下室供暖锅炉燃烧不充分产生一氧化碳所致",
    "用新质生产力引领农业",
    "2023年全国国土绿化面积超800万公顷",
    "中央企业将继续加大援疆力度 多领域投资“新”意十足",
    "中伊俄“安全纽带-2024”联合演习开幕",
    "航行警告！东海海域有实弹射击训练",
    "降低维权成本、快速解决纠纷 加强新就业形态劳动者权益保障打出“组合拳”",
    "多组数据传递积极信号 我国汽车出口表现良好 新能源汽车继续“领跑”",
    "郝鹏李乐成看望参加全国两会宣传报道的新闻工作者和代表团工作人员",
    "黑龙江代表团召开小组会议 许勤梁惠玲等参加审议",
    "四川代表团举行全体会议 审议大会有关决议草案 王晓晖主持并讲话 黄强施小琳参加",
    "全国经济林产量达2.26亿吨 森林“粮库”里都有啥？",
    "七八百元的集采心脏支架敢用吗？国家医保局回应",
    "预付式消费维权难？中消协呼吁加快完善该领域相关立法",
    "今年前2个月 粤港澳大湾区9市进出口总值1.29万亿元"
]
const bottoms = [
    "十四届全国人大二次会议在京闭幕",
    "时政微纪录丨春天的盛会 习近平2024年“两会时间”",
    "广州交警：一汽车与行人和电动自行车发生碰撞，致11人受伤",
    "新华社记者说｜今年两会，习近平尤为关切这件“新”事",
    "三北工程攻坚战开局良好：截至去年底造林种草122余万公顷",
    "价格悬念即将揭晓！雷军官宣小米汽车3月28日正式发布",
    "外交部：从不承认并坚决反对印度非法设立的所谓“阿鲁纳恰尔邦”",
    "澎湃新质生产力周报《新引擎》上线：向“新”出发",
    "韩医学院教授协会：如实习住院医生和医学生遭受损失，将追究政府责任",
    "菲律宾驻美大使称望同美日澳等开发南海油气资源，外交部回应",
    "中国、伊朗、俄罗斯三国海军将举行“安全纽带-2024”联合演习",
    "国际锐评：福岛核污染水再次泄漏印证了三个判断",
    "太子港遭黑帮“围城”：海地总理辞职，帮派头目发起内战威胁",
    "国家体育总局局长高志丹：坚决惩治体育领域腐败N",
    "普京签署法律，禁止俄公民和企业宣传外国代理人信息",
    "观察｜德法对乌军援“肥皂剧”持续，公开分歧或是战略思考？",
    "乌克兰总统：乌境内不需要外国军队，欢迎北约相关人员",
    "上海市委金融办和市经济信息化委进行工作会商：形成工作合力，不断提升金融对新质生产力的服务能力",
    "航天彩虹：低空物流相关应用目前处于方案论证阶段",
    "外交部：中国对南海诸岛拥有主权，中菲在南海不存在领土争议",
    "两会中国经济问答丨设备更新和消费品换新将如何撬动内需大市场？",
    "李辉结束第二轮穿梭外交，外交部：真诚希望尽早停火，政治解决乌克兰危机",
    "阿布扎比成立科技投资公司瞄准AI核心技术，“未来几年管理资产或超千亿美元”",
    "亚锦赛上，潍坊姑娘斩获3金1银！",
    "走出“代工”，制造业出海如何打造“高端品牌”？",
    "特斯拉德国工厂供电恢复，供电系统曾在上周遭破坏"
]
</script>

<style scoped>
.infinite-list {
  list-style: none;
  padding: 0;
  overflow: auto;
}

.infinite-list-item {
  width: 200px; /* 固定宽度 */
  overflow: hidden; /* 隐藏溢出部分 */
  white-space: nowrap; /* 禁止换行 */ 
  font-size: 14px;
  position: relative;
}
.infinite-list-item :hover {
  cursor: pointer;
  background-color: steelblue;
  color: aliceblue;
}
.infinite-list-item p{
  position: absolute;
  color: black;
  animation: scrollLeftRight 10s linear infinite; /* 水平滚动动画 */
}

@keyframes scrollLeftRight {
  0% {
    left: 0;
    transform: translateX(0);
  }

  100% {
      left: 100%;
      transform: translateX(-100%);
  }
}
.el-select {
  height: 50px;
  padding: 0;
  margin: 0;
}
.select {
  flex: 1;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 600px;
  text-align: center;
  user-select: none;
}
#select1 {
  flex: 40%;
  margin-bottom: 8%;
}
#select2 {
  margin-top: 8%;
  flex: 40%;
}

.Newselect {
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 300px; /* 固定树的高度为300像素，可以根据需要调整 */
  overflow: hidden; /* 添加滚动条 */
  background-color: transparent;
  justify-content: center; /* 在水平方向上居中 */
  align-items: center; 
}
.infinite-list {
  flex: 60%;
  margin-left: 3%;
  width: 95%;
  list-style: none;
  padding: 0;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100%;
  background: var(--el-color-primary-light-9);
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-top: 0px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>