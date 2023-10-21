<script setup>
import { onMounted } from 'vue'
import request from '@/utils/request.js'
import { useUserStore } from '@/stores/modules/user.js'

// 有一段 API 回應如上圖。
// 請寫出一段程式，找出 airportId 為 TPE 的 city，並印出它的 cityName

const userStore = useUserStore()
onMounted( async()=>{
  const res = await request.get('http://localhost:3000/response')
  // console.log(res.data.splice(1,1))
  userStore.cityList = res.data.splice(1,1)
})



// 2. 什麼是 arrow function ？它對 this 有什麼影響？請寫下自己的理解。
// 3. call by value 與 call by reference 的差別是什麼？請寫下自己的理解。
// 4. 什麼是 async / await ？請寫下自己的理解。
// 5. 什麼是 Closure (閉包)？請寫下自己的理解，並舉一個應用的例子。
// 6. 什麼是 AJAX ？他的使用時機為何？請寫下自己的理解。
// 效能與安全性
// 7. 請解釋 Browser rendering 中 layout、painting、compositing 分別在做什麼？會如何影響效能？該如何避免？請寫下自己的理解。
// 8. 請說明 XSS 攻擊如何進行？該如何防禦？請寫下自己的理解。
// 開發經驗及其他
// 9. 平常使用什麼編輯器與瀏覽器？還有哪些輔助開發的工具？
// 10. 請寫下你使用版本控制系統的經驗。
// 11. 使用過哪些 web 相關的 framework？對於開發時使用 framework 有什麼想法？
// 12. 是否有做過 Unit Test 或 E2E Test？若有請分享你使用的工具及經驗。
// 13. 這份試題的難度如何？有什麼想對出題者說的話嗎？
</script>

<template>
  <div><h2></h2></div>
<div>1233</div>
</template>

<style scoped>

</style>
