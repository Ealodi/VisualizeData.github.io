<template>
  <div class="ct">
      <p>国家选择</p>
      <el-select-v2
          v-model="value1"
          :options="options1"
          placeholder="Please select"
          style="width: 240px"
      />
  </div>
  <div class="mt">
      <p>媒体选择</p>
      <el-select v-model="value2" placeholder="中新网" style="width: 240px">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const value1 = ref('俄罗斯')
const value2 = ref('中新网')
var options1 = ref([])
const options2 = [
{
  value: 'Option1',
  label: '中新网',
},
{
  value: 'Option2',
  label: '新浪新闻',
},
{
  value: 'Option3',
  label: '澎湃新闻',
},
{
  value: 'Option4',
  label: '环球网',
},
{
  value: 'Option5',
  label: '央视新闻',
},
]
axios.get('src/assets/json/dqr.json').then(response =>{
  var data = response['data']['2020']['1']
  const transformedData = Object.keys(data).map(key => ({
      value: data[key],
      label: key
  }));
  options1.value = transformedData
})

</script>

<style scoped>
.ct {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
}
.mt {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
}
p {
  flex: 30%;
  margin-top: 2%;
  font-size: 12px;
  color: rgb(0, 0, 0);
  justify-content: center;
  user-select: none;
}
.el-select {
  flex: 1;
  margin-bottom: 5%;
}
.el-select-v2 {
  flex: 1;
  margin-bottom: 5%;
}
</style>