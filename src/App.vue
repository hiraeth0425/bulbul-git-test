<script setup>
import 'element-plus/theme-chalk/display.css'

</script>

<template>
<div class="view">
  <el-row justify="center">
    <el-col class="hidden-sm-and-up"><div  class="sec-menu "></div></el-col>
    <el-col class="hidden-xs-only" :md="5" :lg="5">
      <div class="menu ">
        <h2>白頭翁不吃小米</h2>
        <!-- 菜單 -->
        <ul>
          <li>白頭翁的特性</li>
          <li>白頭翁的故事</li>
          <li>白頭翁的美照</li>
          <li>白頭翁的危機</li>
        </ul>
        <!-- <div class="shape"></div> -->
      </div>
    </el-col>
    <el-col :md="19" :lg="19">
      <!-- banner佈局 -->
      <div class="container">
          <div class="banner">
          <div class="float">
            <h1>白頭翁 (Chinese bulbul)</h1>
            <p>又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。</p>
          </div>
        </div>
            <div class="containerText">
          <div>
            <div class="fontTitle"><h3>外觀</h3><div class="deco"><img src="./assets/deco.svg" alt=""></div></div>
            
            <div clsss="fontText">白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。</div>
          </div>
          <div>
            <div class="fontTitle"><h3>棲地</h3><div class="deco"><img src="./assets/deco.svg" alt=""></div></div>
            <div clsss="fontText">白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。</div>
          </div>
          <div>
            <div class="fontTitle"><h3>食性</h3><div class="deco"><img src="./assets/deco.svg" alt=""></div></div>
            <div clsss="fontText">以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。</div>
          </div>
        </div>
      </div>
    
    </el-col>
  </el-row>
</div>
</template>

<style scoped lang="scss">
$font-family: Noto Sans;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-family;
}
li{
  list-style: none;
}
.sec-menu{
  width: 100%;
  height: 88px;
  // background-color: blue;
}
.view {
  // display: flex;
  margin: 0 auto;
  max-width: 1440px;
  .menu {
    text-align: center;
    max-width: 345px;
    height: 1002px;
    .shape {
            width: 60px;
            height: 80px;
            border: 10px solid black;
            border-bottom-left-radius: 30px 40px;
            border-bottom-right-radius: 30px 40px;
            border-top-left-radius: 50% 60%;
            border-top-right-radius: 50% 60%;
            background-color: transparent;
        }
    }
    h2 {
      margin: auto;
      padding-top: 79px;
      font-weight: 700;
      font-family:$font-family;
      font-size: 1.875rem;
    }
    ul{
      margin-top: 75px;
      li{
        margin-bottom: 22px;
        font-size: 1.125rem;
        &:hover{
          color: #AA6666;
        font-weight: 700;
        text-decoration: underline;
        }
      }
    }
  }
  .container {
    max-width: 1095px;
    height: 1002px;
    background-color: #DCCCBC;
    .containerText {
      padding-top: 58px;
      display: flex;
      justify-content: space-evenly;

      div{
      max-width: 274px;
      display: flex;
      .fontTitle {
        position: relative;
        padding: 5px;
        margin-left: 5px;
        margin-right: 37px;
        width: 36px;
        height: 80px;
        font-family: $font-family;
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 2.5rem;
       .deco {
        position: absolute;
        bottom: -13px;
        left: 35px;
      }
    }
      .fontText {
        margin-bottom: 49px;
        width: 400px;
        height: 176px;

      }
      
    }
    }
    .banner {
      // display: flex;
      position: relative;
      max-width: 1095px;
      height: 635px;
      background-color: yellow;
      background: url(./assets/bannerPic.jfif) no-repeat 66% 48% / 185% ;
    .float {
      color: #fff;
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: right;
      h1 {
        margin-right: 44.75px;
        margin-bottom: 4px;
        display: inline-block;
        font-family: $font-family;
        font-size: 3rem;
        font-style: normal;
      }
      p {
        margin-bottom: 36.85px;
        margin-right: 44.75px;
        font-family: $font-family;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
      }
    }
    }
  }

</style>
