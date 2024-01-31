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
        <h2>白頭翁不吃小米要吃大米要吃大米</h2>
        <h3>老鼠愛大米</h3>
        <h3>老鼠愛大米</h3>
        <div class="logoTitle">
          <svg viewBox="0 0 100 100">
            <ellipse cx="60.5" cy="50.5" rx="27.5" ry="26.5" fill="black"/>
            <ellipse cx="64.5" cy="55" rx="33.5" ry="23" fill="white"/>
            <ellipse cx="84.2945" cy="49.2924" rx="13" ry="9.5" transform="rotate(6.47122 84.2945 49.2924)" fill="black"/>
            <rect x="77.2639" y="49.0355" width="22.4721" height="14.2846" transform="rotate(-5.71177 77.2639 49.0355)" fill="white"/>
            <ellipse cx="77.17" cy="49.994" rx="7" ry="11" transform="rotate(6.47122 77.17 49.994)" fill="white"/>
            <circle cx="69.5" cy="55.5" r="14.5" fill="black"/>
            <ellipse cx="69.5" cy="51" rx="14.5" ry="11" fill="white"/>
            <rect x="29" y="44" width="40" height="18" fill="white"/>
            <rect x="36" y="62" width="33" height="8" fill="black"/>
            <circle cx="65" cy="47" r="5" fill="black"/>
          </svg>
        </div>
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
.logo {
            z-index: 999;
            background-color: #fff;
            border: 1px solid #ffffff;
            border-radius: 50%;
            width: 98px;
            height:98px;
            box-shadow: 1px 0px 15px -1px rgba(120,120,120,0.57);
            -webkit-box-shadow: 1px 0px 15px -1px rgba(120,120,120,0.57);
            -moz-box-shadow: 1px 0px 15px -1px rgba(120,120,120,0.57);

        }

.logoTitle {
            z-index: 999;
            background-color: #fff;
            border: 1px solid #ffffff;
            border-radius: 50%;
            width: 48px;
            height:48px;
            box-shadow: 1px 0px 15px -1px rgba(120,120,120,0.57);
            -webkit-box-shadow: 1px 0px 15px -1px rgba(120,120,120,0.57);
            -moz-box-shadow: 1px 0px 15px -1px rgba(120,120,120,0.57);
            svg {
                left: -20px;
                top: -25px;
            }
        }
.view {
  margin: 0 auto;
  max-width: 1440px;
.sec-menu{
  padding: 19px;
  align-items: center;
  width: 100%;
  height: 88px;
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
