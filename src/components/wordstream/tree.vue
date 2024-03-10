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
          <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
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
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
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

</script>


<style>
.el-select {
  height: 50px;
  padding: 0;
  margin: 0;
}
</style>
<style scoped>
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