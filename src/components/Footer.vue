<script>
export default {};
</script>
<template>
  <footer>
    <div>
      <div class="left_box">
        <h4>商律樂器</h4>
        <p>
          商律樂器成立於2021
        <br>
          台灣新銳鍵盤樂器代理商
        <br>
          目前代理品牌
        <br>
          -CASIO
        <br>
          -KORG
        <br>
          -ROLAND
        <br>
          -RHODES(ROLAND)
        <br>
          -YAMAHA
        </p>
      </div>
      <div class="right_box">
          <a href="https://www.facebook.com/" target="_blank"><img src="https://i.ibb.co/WxBNfD1/F.png"  alt="facebookicon" border="0" width="50px" height="50px"></a>
          <br>
          <a href="https://www.instagram.com/" target="_blank"><img src="https://i.ibb.co/j47vSHx/IGI.png"  alt="igicon" border="0" width="50px" height="52px"></a>
          <br>
          <a href="https://line.me/zh-hant/" target="_blank"><img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/line_logo_icon_145104.png"  alt="" border="0" width="50px" height="50px"></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 420px;
  background-color: #d3c2c2;
  @media screen and (max-width: 640px) {
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: #ebebeb;
  }
  > div {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
  }
}
.left_box {
  width: 50%;
  height: 100%;
  float: left;
  padding-top: 4%;
  padding-left: 13%;
  @media screen and (max-width: 640px) {
    width: 100%;
    float: none;
    padding-top: 0%;
  }
  > h4 {
    color: #088ca5;
    font-size: 30px;
    padding: 15% 11% 3% 11%;
    @media screen and (max-width: 640px) {
      color: #088ca5;
      font-size: 30px;
      padding: 15% 11% 3% 11%;
    }
  }
}
.right_box {
  width: 50%;
  height: 100%;
  float: right;
  padding-top: 10.5%;
  padding-left: 20%;
  @media screen and (max-width: 640px) {
    width: 100%;
    float: none;
    padding-top: 0%;
  }
}

.left_box,
.right_box {
  > p {
    color: #515151;
    font-size: 14px;
    padding: 20px 11%;
    text-align: justify;
  }
}
</style>
