
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AOS from 'aos';
import device from "current-device";
import { onMounted } from 'vue';
export default {
  setup(){
    onMounted(()=> {
      AOS.init();
      console.log(device.desktop());
    });
  },
  components: {
    Header,
    Footer,
  },
}   
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Microsoft JhengHei", "Heiti TC", "sans-serif";
}
img {
  display: block;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>