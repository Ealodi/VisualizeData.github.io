<template>
  <div class="info_">
    <el-row>
      <el-col :span="6">
        <el-statistic title="新闻总量" :value="outputValue" />
      </el-col>
      <el-col :span="6">
        <el-statistic :value="hotValue">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              热度排行
            </div>
          </template>
          <template #suffix>/167</template>
        </el-statistic>
      </el-col>
      <el-col :span="6">
        <el-statistic title="月偏移方差" :value="fc">
          <template #suffix>
            <el-icon style="vertical-align: -0.125em">
              <ChatLineRound />
            </el-icon>
          </template>
        </el-statistic>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-statistic title="国土面积(万㎢)" :value="1707.54" :precision="2"/>
      </el-col>
      <el-col :span="6">
        <el-statistic title="人口总数(亿)" :value="1.472" :precision="3"/>
      </el-col>
      <el-col :span="6">
        <el-statistic title="数据源" :value="data_source"/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Menu } from '@element-plus/icons-vue'
const source = ref(0),htvalue = ref(0),fcs = ref(0),data_source = "中新网"
const outputValue = useTransition(source, {
  duration: 1500,
})
source.value = 2708
const hotValue = useTransition(htvalue,{
  duration: 1200,
})
htvalue.value = 7

const number = [269,235,237,216,227,198,219,155,173,236,224,319];
const fc = useTransition(fcs,{
  duration: 1500,
})
fcs.value = calculateVariance(number)
//计算方差
function calculateVariance(numbers) {
  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  const squaredDifferencesSum = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0);
  const variance = squaredDifferencesSum / numbers.length;
  return variance;
}
</script>

<style>
.info_ {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.el-statistic__head,.el-statistic__number,
.el-statistic__suffix,svg
.el-statistic {
  color: #fff!important; /* 设置字体颜色 */
}
.el-row {
  flex: 40%;
  margin: 3%;
  display: flex;
  justify-content: space-around;
}

</style>

<style scoped>

.el-col {
  text-align: center;
}
</style>
