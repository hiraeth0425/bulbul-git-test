<script setup>
import 'element-plus/theme-chalk/display.css'
import {ref} from 'vue'
import MenuPage from './components/MenuPage.vue'
import BannerPage from './components/BannerPage.vue'
import DrawerPage from './components/DrawerPage.vue'
import { Expand } from '@element-plus/icons-vue'

const dwawerModel = ref()

const onHambuger = () => {
  dwawerModel.value.open()
}

</script>

<template>
<div class="view">
  <el-row justify="center">
    <DrawerPage ref="dwawerModel"></DrawerPage>
    <el-col :xs="24">
      <!-- 漢堡選單 -->
      <div class="sec-menu hidden-sm-and-up">
        <el-button :icon="Expand" size="large" @click="onHambuger"></el-button>
        <h2>白頭翁不吃小米</h2>
        <div class="logo">logo</div>
      </div>
    </el-col>
    <el-col class="hidden-xs-only" :sm="8" :md="5" :lg="5">
      <MenuPage></MenuPage>
    </el-col>
    <el-col :xs="24" :sm="16" :lg="19">
      <BannerPage></BannerPage>
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss">
$font-family: Noto Sans;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-family;
}
.view {
  margin: 0 auto;
  max-width: 1440px;
.sec-menu{
  align-items: center;
  width: 100%;
  height: 88px;
  // background-color: blue;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  .h5 {
    flex: 1;
  }
}
  }

</style>
