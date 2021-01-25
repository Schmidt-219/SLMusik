
<script>
import SwiperCore, { Navigation,Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([ Navigation, Pagination, Autoplay]);
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
  <div class="bigTitle" align="center">XE20</div>
  <div class="twoTypePic">
    <swiper
    :slides-per-view="1"
    :space-between="50"
    navigation
    :scrollbar="{draggable: true }"
    :autoplay="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
    <swiper-slide><img src="https://cdn.korg.com/tw/products/upload/aff3d62844feee9c9bb585e8571ff652_pc.png" style="width:900px;"></swiper-slide>
    <swiper-slide><img src="https://cdn.korg.com/tw/products/upload/36d823a087a8916f5e3dcd83df22991b_pc.png" style="width:900px;"></swiper-slide>
    </swiper>
  </div>

  <center>
    <div class="title1Xe">88全配重鍵自動伴奏電鋼琴</div>
  </center>

  <div class="flexboxWordonly">
    <center>
      <div class="twoTypeIdx">
        兩種款式。
      </div>
      <div class="twoTypeIdxSmall">
        <ul>
          <li>XE20:主機+譜板+單踏板</li>
          <li>XE20SP:主機+譜板+下琴身+三音踏板</li>
        </ul>
      </div>
    </center>

    <center>
      <div class="twoTypeIdx">
        超值。
      </div>
      <div class="twoTypeIdxSmall">
        <ul>
          <li>18W超強喇叭輸出</li>
          <li>半踩踏延音踏板</li>
        </ul>
      </div>
    </center>
  </div>

  <div class="officialSite">
    <a href="https://www.korg.com/tw/products/digitalpianos/xe20/specifications.php" target="_blank">官網詳細規格&lt;&lt;</a>
  </div>

  <div class="pictureFromTop" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"  data-aos-duration="1000">
    <img src="https://cdn.korg.com/tw/products/upload/d75cf30dd704a9a779b95cfd9174f6f4_pc.jpg"  alt=""  style="display:block; margin:auto;">
  </div>

  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
  <!-- <div class="padder in-view" data-show="on-scroll"> </div> -->
  <div class="tableTitle"><span class="midText">超多變化</span></div>

  <div>
    <br>
    <br>
  </div>

  <div class="flexboxWordonly">
    <center>
      <div class="threeTypeIdx">
        <a href="https://soundcloud.com/search?q=korg%20xe20" target="_blank">705種</a>
      </div>
      <div class="threeTypeIdxSmall">
        <dl>
          <dt><a href="https://soundcloud.com/search?q=korg%20xe20" target="_blank">音色</a></dt> 
        </dl>
      </div>
    </center>

    <center>
      <div class="threeTypeIdx">
        41種
      </div>
      <div class="threeTypeIdxSmall">
        <dl>
          <dt>鼓組</dt> 
        </dl>
      </div>
    </center>

    <center>
      <div class="threeTypeIdx">
        280種
      </div>
      <div class="threeTypeIdxSmall">
        <dl>
          <dt>節奏</dt> 
        </dl>
      </div>
    </center>
  </div>


</template>

<style>
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
.twoTypePic{
  width: 900px;
  padding-top: 20px;
  display:block; 
  margin:auto;
}
.title1Xe{
  font-size: 35px;
  width:930px;
  text-align: center;
  padding-top: 110px;
}
.flexboxWordonly{
  padding-left: 21%; 
  padding-right: 20%; 
  padding-top: 95px;
  display: flex;
  justify-content:safe;
}
.twoTypeIdx{
  font-size: 35px;
  width:521px;
  text-align: left;
  /* padding-top: 85px; */
  padding-bottom: 0%;
  padding-left: 15%;
}
.twoTypeIdxSmall{
  width: 520px;
  text-align: left;
  padding-top: 15px;
  padding-left: 25%;
  padding-bottom: 100px;
}
.tableTitle {
    position: relative;
    margin: 0 auto;
    width: 600px;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
    color: rgba(101, 101, 101, 1);
  }
.midText {
  position: absolute;
  left: 50%;
  background-color: #ffffff;
  padding: 0 15px;
  transform: translateX(-50%) translateY(-50%);
}
.threeTypeIdx{
  font-size: 35px;
  width:400px;
  text-align: left;
  /* padding-top: 85px; */
  padding-bottom: 0%;
}
.threeTypeIdxSmall{
  width: 400px;
  text-align: left;
  padding-top: 15px;
  padding-left: 10%;
  padding-bottom: 100px;
}
</style>