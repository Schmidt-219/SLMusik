
<script>
import SwiperCore, { Navigation,Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([ Navigation, Scrollbar, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(){
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return{onSwiper, onSlideChange};
  },
}
</script>

<template>
  <div id="Home">
    <swiper
    :slides-per-view="1"
    :space-between="50"
    navigation
    :scrollbar="{draggable: true }"
    :autoplay="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
    <swiper-slide><a href="http://tw.roland.com/products/gopiano_go-88p/" target="_blank"><img src="https://static.roland.com/products/go-88p/images/go-88p_hero.jpg"></a> </swiper-slide>
    <swiper-slide><a href="http://tw.roland.com/products/rd-88/" target="_blank"><img src="https://static.roland.com/products/rd-88/images/rd-88_hero.jpg"></a></swiper-slide>
    <swiper-slide><a href="https://www.korg.com/tw/products/digitalpianos/xe20/" target="_blank"><img src="https://cdn.korg.com/tw/products/upload/f2ed7038f161927903a07b80e43b5607_pc.jpg"></a></swiper-slide>
    <swiper-slide><a href="https://www.korg.com/tw/products/synthesizers/sv_2/" target="_blank"><img src="https://cdn.korg.com/tw/products/upload/1e8e5888cd0cece8a61505dbfd717ef3_pc.jpg"></a></swiper-slide>
    <swiper-button-next></swiper-button-next>
    <swiper-button-prev></swiper-button-prev>
    </swiper>
  </div>
  
  <center>
    <div class="hot">近期熱銷機種</div>
  </center>
  <div class="box">
    <div class="idx1">
      初學超值款:
      <div class="idx2"><a href="https://www.google.com/search?safe=strict&biw=1707&bih=838&tbm=shop&sxsrf=ALeKk02cqTgLCNz40j7B5aCdY5UfrDqa9A%3A1611581302295&ei=dscOYO3REYHVmAX7r7DoCQ&q=roland+go%3Apiano88&oq=roland+go%3Apiano88&gs_lcp=Cgtwcm9kdWN0cy1jYxADOgQIIxAnOgIIADoFCAAQzQI6CAgAELEDEIMBOgcIIxDqAhAnOgQIABADOgQIABAYUJoYWIFkYMRnaAFwAHgCgAGvAYgBxgqSAQQyNS4xmAEAoAEBqgEPcHJvZHVjdHMtY2Mtd2l6sAEKwAEB&sclient=products-cc&ved=0ahUKEwjt5LKYmLfuAhWBKqYKHfsXDJ0Q4dUDCAs&uact=5" target="_blank">ROLAND GO:PIANO88 ($16800)</a></div>
      <br>
      家用大喇叭款:
      <div class="idx2"><a href="https://www.google.com/search?safe=strict&biw=1707&bih=838&tbm=shop&sxsrf=ALeKk003bm18Qns7vpQ3xJeJsuFZGWjipg%3A1611581316583&ei=hMcOYMaBI9SZr7wPyvWL6Ac&q=korg+xe20&oq=korg+xe20&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgQIABATMgQIABATMgQIABATMgQIABATMgQIABATMgQIABATMggIABAeEBMQGDIICAAQHhATEBgyCAgAEB4QExAYMggIABAeEBMQGDoHCCMQ6gIQJzoICAAQsQMQgwE6AggAOgQIABADUM-HBljupwZgx6sGaAFwAHgAgAGkAYgBtASSAQM4LjGYAQCgAQGqAQ9wcm9kdWN0cy1jYy13aXqwAQrAAQE&sclient=products-cc&ved=0ahUKEwjG05qfmLfuAhXUzIsBHcr6An0Q4dUDCAs&uact=5" target="_blank">KORG XE20(SP) ($28000)</a></div>
      <br>
      街頭藝人好幫手:
      <div class="idx2"><a href="https://www.google.com/search?safe=strict&biw=1707&bih=838&tbm=shop&sxsrf=ALeKk02MMsPrP9c8Lx96mRuMlchMa8ceBg%3A1611581421399&ei=7ccOYJvwF6aJmAWb2ZS4Cw&q=roland+rd-88&oq=roland+rd-88&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgQIABATMgQIABATMgQIABATMgQIABATMgQIABATMgQIABATMgQIABATMgQIABATMgYIABAeEBMyCAgAEAgQHhATOggIABAeEBMQGDoHCCMQ6gIQJzoICAAQsQMQgwE6AggAOgQIABADOgQIIxAnOgQIABAYULeeA1jruQNgzMIDaAFwAHgAgAFJiAGRBZIBAjEzmAEAoAEBqgEPcHJvZHVjdHMtY2Mtd2l6sAEKwAEB&sclient=products-cc&ved=0ahUKEwjbmpjRmLfuAhWmBKYKHZssBbcQ4dUDCAs&uact=5" target="_blank">ROLAND RD-88 ($39900)</a></div>
      <br>
      行家神器:
      <div class="idx2"><a href="https://shop.cyuncai.com/korg-sv-2-stage-vintage-piano" target="_blank">KORG SV-2 ($70000)</a></div>
    </div>
  </div>
  <!-- <div class="box21">
    <div class="hotTitle">
      熱銷機種
    </div>
    <div class="hotIdx">
      <ul>
        初學超值款
        <li>ROLAND GO:PIANO88 ($16800)</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <dl>
        <dt>初學超值款:</dt>
        <dd>ROLAND GO:PIANO88 ($16800)</dd>
        <dt>家用大喇叭款:</dt> 
        <dd>KORG XE20(SP) ($28000)</dd>
        <dt>街頭藝人好幫手:</dt>
        <dd>ROLAND RD-88 ($39900)</dd>
        <dt>專業神器:</dt>
        <dd>KORG SV-2 ($70000)</dd>
      </dl>
    </div>
  </div> -->

  <!-- <div><img src="@/assets/images/Logo.gif" style="width:100%;"></div> -->
</template>

<style>
  #Home{
    width: 100%;
    height: 700px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;

  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .hot{
    font-size: 35px;
    padding-top: 85px;
    padding-bottom: 45px;
  }
  .box{
    padding-left: 38%;
    padding-bottom: 85px;
  }
  .idx1{
    font-size: 22px;
  }
  .idx2{
    padding-left: 1.5%;
    font-size: 22px;
  }
    /* .box21{
      padding-left: 21%;
      background-color: wheat;
    }
    .hotTitle{
      font-size: 35px;
    }
    .hotIdx{

      font-size: 18px;
    } */
</style>