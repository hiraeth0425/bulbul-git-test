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
        <div class="logo">logo</div>
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
