<template>
  <div id="app">
    <!-- bar latérale colorée -->
    <SideBar v-on:openSearch="toggleOverlay"></SideBar>
    <!-- navigation -->
    <Nav></Nav>
    <!-- contenu -->
    <div v-if="overlay" class="overlay"></div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import SideBar from "./components/SideBar.vue";
  import ColorPicker from "./components/ColorPicker.vue";
  import Nav from "./components/Nav.vue";

  export default {
  name: "App",
  components: {
    SideBar,
    Nav,
    ColorPicker
    
  },
  data: function(){
    return{
      overlay: false
    }
  },
  methods: {
      toggleOverlay(){
        this.overlay = !this.overlay
      }
  }
};
</script>

<style lang="scss">
@import './reset.scss';

#app{
  font-family: Verdana;  
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 100vh;
}
.content{
  overflow: scroll;
  padding: 10% 14%;
}
.overlay{
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(74,74,74,0.30);
}

</style>
