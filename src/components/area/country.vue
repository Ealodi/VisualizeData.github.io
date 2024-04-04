<template>
    <el-skeleton style="width: 100%;">
      <template #template>
        <el-image style="width: 60%; height: 100%" :src="url" :fit="fits" />
        <div class="description">
            <p class="countryText">俄罗斯</p>
            <p class="countryText Englishtext">Russia</p>
        </div>
      </template>
    </el-skeleton>
</template>
<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png'
</script>

<style scoped>
    .el-skeleton {
        display: flex;
        width: 100%;
        height: 95%;
        padding: 5px;
        border-right: 1px solid #cbcbcb;
    }
    .Englishtext {
        font-size: 14px!important;
    }
    .countryText {
        font-size: 18px;
        color: #000000;
        text-align: center;
        margin: 5px;
        align-items: center;
    }
    .description {
        display: flex;
        flex: 30%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
    }
    .el-image {
        flex: 60%;
        margin-bottom: 10px;
    }
</style>