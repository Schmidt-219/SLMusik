<script>
import { ref } from "vue";
export default {
  setup() {
    const isOpen = ref(false);

    const HandMenuOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      HandMenuOpen,
      isOpen,
    };
  },
};
</script>
<template>
  <header :class="{ openMenu: isOpen }">
    <nav>
      
      <router-link class="Title" to="/">商律樂器</router-link>
      <a id="moblie_menu" @click="HandMenuOpen" href="javascript:;"></a>
      <div>
        <router-link to="/gopiano88">Roland GO:Piano88</router-link>
        <router-link to="/rd88">Roland RD-88</router-link>
        <router-link to="/xe20">Korg XE20</router-link>
        <router-link to="/sv2">Korg SV-2</router-link>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
a {
  color: #ad8f4e;
  font-size: 19px;
  text-decoration: none;
  background-image: linear-gradient(#ad8f4e, #ad8f4e);
  background-position: left bottom;
  background-size: 0 2.5px;
  background-repeat: no-repeat;
  transition: background-size 0.15s linear;
}
a:hover {
  background-size: 100% 2.5px;
}
h6 {
  color: greenyellow;
  font-size: 40px;
}
header {
  background-color: #373c3f;
  width: 100%;
  height: 97px;
  @media screen and (max-width: 640px) {
    transition: height 0.2s;
    height: 37px;
    overflow: hidden;
    &.openMenu {
      height: 232px;
    }
  }
  > nav {
    position: relative;
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      height: 232px;
    }
    > .Title {
      line-height: 97px;
      font-size: 18px;
      float: left;
      color: #fff;
      margin-right: 20px;
      @media screen and (max-width: 1044px) {
        margin-left: 5%;
      }
      @media screen and (max-width: 640px) {
        line-height: 37px;
      }
    }
    > div {
      width: 100%;
      height: 100%;
      @media screen and (max-width: 640px) {
        clear: both;
        width: 100%;
        height: 195px;
      }
      > a {
        display: block;
        line-height: 97px;
        font-size: 15px;
        float: left;
        color: #fff;
        padding: 0 10px;
        @media screen and (max-width: 640px) {
          width: 100%;
          height: auto;
          overflow: hidden;
          line-height: 37px;
          text-align: center;
        }
      }
    }
  }
}
a#moblie_menu {
  display: none;
  @media screen and (max-width: 640px) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 37px;
    height: 37px;
    background-image: url("~@/assets/images/menu.jpg");
    background-position: 50% 50%;
    background-size: 95% auto;
    background-repeat: no-repeat;
  }
}
// header > nav {
//   position: relative;
//   width: 1024px;
//   height: 100%;
//   margin: 0 auto;
// }
// header > nav > h1 {
//   line-height: 97px;
//   font-size: 18px;
//   float: left;
//   color: #fff;
//   margin-right: 20px;
// }
// header > nav > div {
//   width: 100%;
//   height: 100%;
// }
// header > nav > div > a {
//   display: block;
//   line-height: 97px;
//   font-size: 15px;
//   float: left;
//   color: #fff;
//   padding: 0 10px;
// }
.logo{
padding-left: 79%;
  // padding-top: 25px;
  position: fixed;
}
</style>
