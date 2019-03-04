<template>
  <div id="app">
    <!-- bar latérale colorée -->
    <SideBar v-on:color="test"></SideBar>
    <!-- navigation -->
    <section id="nav">
      <div class="logoContainer">
          <img src="./assets/logo.svg" alt="">
          <p class="logoSubtitle">styleguide</p>
      </div>

       <div class="link">
         <router-link to="/">Le Concept</router-link> 
         <img src="./assets/arrow.svg" alt="flèche indicative">
       </div>
       <div class="link">
         <router-link to="/about">Design</router-link> 
         <img src="./assets/arrow.svg" alt="flèche indicative">
       </div>                
      <div class="link">
         <router-link to="/composants">Composants</router-link> 
         <img src="./assets/arrow.svg" alt="flèche indicative">
       </div>
       <div class="link">
         <router-link to="/templates">Templates</router-link> 
         <img src="./assets/arrow.svg" alt="flèche indicative">
       </div>
      
    </section>
    <!-- contenu -->
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import SideBar from "./components/SideBar.vue";
  import ColorPicker from "./components/ColorPicker.vue";

  export default {
  name: "App",
  components: {
    SideBar,
    ColorPicker
    
  },
  data: function(){
    return{
      visible : false
    }
  },
  methods: {
      test : function(){
          this.visible = true
      }
  }
};
</script>

<style lang="scss">
@import '../reset.scss';

#app{
  font-family: Verdana;  
  display: grid;
  grid-template-columns: 70px auto auto auto;
  grid-template-rows: 100vh;
}
#nav{
  display: flex;
  flex-direction: column;
  border: solid 1px #DEDEDE;
  .link{
    display: flex;
    justify-content: space-between;
    padding: 35px 30px;
    border-bottom: solid 1px #DEDEDE;
    cursor: pointer;
    a {
      text-decoration: none;
      font-size: 16px;
      color: rgba(0,0,0,0.70);
    }
  }
}
.logoContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 85px;
    border-bottom: solid 1px #DEDEDE;
}
.logoSubtitle{
    margin-top: 15px;
    text-transform: uppercase;
    font-size: 10px;
    color: #B2B2B2;
    letter-spacing: 3.12px;
}
.content{
  overflow: scroll;
  padding: 10% 14%;
}
</style>
