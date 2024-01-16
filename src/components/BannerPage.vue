<script setup>
</script>

<template>
      <div class="container">
        <div class="banner">
          <img src="@/assets/bannerPic.jfif" alt="">
          <div class="float">
            <h1>白頭翁 (Chinese bulbul)測試測試</h1>
            <p>又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。測試測試</p>
          </div>
      </div>
          <div class="containerText">
        <div>
          <div class="fontTitle"><h3>外觀</h3><div class="deco"><img src="@/assets/deco.svg" alt=""></div></div>
          
          <div clsss="fontText">白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。</div>
        </div>
        <div>
          <div class="fontTitle"><h3>棲地</h3><div class="deco"><img src="@/assets/deco.svg" alt=""></div></div>
          <div clsss="fontText">白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。</div>
        </div>
        <div>
          <div class="fontTitle"><h3>食性</h3><div class="deco"><img src="@/assets/deco.svg" alt=""></div></div>
          <div clsss="fontText">以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。</div>
        </div>
      </div>
    </div>
  
</template>

<style scoped lang="scss">
    .container {
      max-width: 1095px;
      height: 100%;
      background-color: #DCCCBC;
      .containerText {
        padding-top: 58px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        
        div{
          margin-bottom: 49px;
          max-width: 274px;
          display: flex;
          .fontTitle {
        position: relative;
        padding: 5px;
        margin-left: 5px;
        margin-right: 37px;
        width: 36px;
        height: 80px;
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 2.5rem;
       .deco {
        position: absolute;
        bottom: -60px;
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
      position: relative;
      max-width: 1095px;
      height: 635px;
      overflow: hidden;
      img {
        width: 180%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
            }
      .float {
      max-width: 100%;
      max-height: 100%;
      display: inline-block;
      color: #fff;
      position: absolute;
      bottom: 36.85px;
      right: 0;
      text-align: right;
      h1 {
        margin-right: 44.75px;
        margin-bottom: 4px;
        font-size: 3rem;
      }
      p {
        margin-right: 44.75px;
        font-size: 1.125rem;
        font-weight: 400;
      }
    }
    }
  }

</style>