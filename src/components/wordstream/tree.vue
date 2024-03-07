<template>
    <el-tree id="tree1" class="custom-tree" :data="data" :props="defaultProps" default-expand-all @node-click="handleNodeClick" />
    <teleport to="#tree">
        <el-tree id="tree2" class="custom-tree" :data="data" :props="defaultProps" default-expand-all @node-click="handleNodeClick" />
      </teleport>
  </template>
  
<script lang="ts" setup>
interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  //console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [

        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [

        ],
      },
      {
        label: 'Level two 2-2',
        children: [

        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [

        ],
      },
      {
        label: 'Level two 3-2',
        children: [

        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>
<style>
.el-tree-node__label {
  color: #9f9f9f; /* 设置您想要的字体颜色 */
}
.el-tree-node__label:hover{
  color: steelblue; /* 设置悬停时的字体颜色 */
}
</style>
<style scoped>
.custom-tree {
  width: 400px;
  box-shadow: 5px 10px 18px #9f9f9f;
  border: 1px solid #cbcbcb;
  height: 300px; /* 固定树的高度为300像素，可以根据需要调整 */
  overflow: auto; /* 添加滚动条 */
  background-color: transparent;
}
</style>