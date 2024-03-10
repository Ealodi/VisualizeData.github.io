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
  </div>
  </template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
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
  width: 400px;
  padding: 0;
  box-shadow: 5px 10px 10px #9f9f9f;
  border: 1px solid #cbcbcb;
  height: 300px; /* 固定树的高度为300像素，可以根据需要调整 */
  overflow: hidden; /* 添加滚动条 */
  background-color: transparent;
}
.infinite-list {
  flex: 80%;
  margin: 1%;
  width: 100%;
  list-style: none;
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