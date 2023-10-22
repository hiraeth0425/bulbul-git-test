<script setup>
</script>

<template>
      <div class="menu ">
        <h2>白頭翁不吃小米</h2>
        <ul>
          <li>白頭翁的特性</li>
          <li>白頭翁的故事</li>
          <li>白頭翁的美照</li>
          <li>白頭翁的危機</li>
        </ul>
      </div>
</template>

<style scoped lang="scss">
li{
  list-style: none;
}
.menu {
    text-align: center;
    max-width: 345px;
    height: 1002px;
    }
    h2 {
      margin: auto;
      padding-top: 79px;
      font-weight: 700;
      font-size: 1.875rem;
    }
    ul{
      display: inline-block;
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
</style>