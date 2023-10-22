<script setup>
</script>

<template>
      <div class="menu ">
        <h2>
          白頭翁不吃小米
  <div class="logo hidden-xs-only">
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
        </h2>
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
      position: relative;
      margin: auto;
      padding-top: 79px;
      font-weight: 700;
      font-size: 1.875rem;
      .logo {
        top: 47px;
        right: -58px;
        position: absolute;
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