<script setup>
import {ref} from 'vue'

const drawer = ref(false)

const open = () => {
    drawer.value = true

}

defineExpose({
    open
})
</script>

<template>
<el-drawer v-model="drawer" size="50%" direction="ttb" modal="false" :show-close="false">
    <template #header="{ close,  }">
    <div class="sec-menu">
        <div class="del" @click="close"><img src="@/assets/hamburgurIcon.svg" alt=""></div>
        <h2>白頭翁不吃小米</h2>
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
</template>
    <div class="menu ">
        <ul>
          <li>白頭翁的特性</li>
          <li>白頭翁的故事</li>
          <li>白頭翁的美照</li>
          <li>白頭翁的危機</li>
        </ul>
    </div>
</el-drawer>
</template>

<style lang="scss" scoped>
.sec-menu{
  color: #000;
  align-items: center;
  width: 100%;
  height: 88px;
  // background-color: blue;
  display: flex;
  font-size: 1.25rem;
  font-weight: 700;
  justify-content: space-between;
  .h5 {
    flex: 1;
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
}

li{
  list-style: none;
}
.menu {
    text-align: center;
    }
    ul{
      display: inline-block;
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
</style>
