<template>
<div class="sidebar-container">
    <section class="sidebar">
        <div class="first">
            <div v-on:click="toggleSearch" class="icon-container">
                <img src="../assets/search_icon.svg" alt="recherche" class="icon">
            </div>
            <Search v-if="searchOpen" v-on:toggleSearch="toggleSearch"></Search>

            <a class="icon-container" href="https://www.mediametrie.fr/fr">
                <img src="../assets/m_icon.svg" alt="médiamétrie" class="icon">
            </a>
            <a class="icon-container" href="https://www.touchbymediametrie.com/index.php">
                <img src="../assets/t_icon.svg" alt="touchbymediametrie" class="icon">
            </a>       
        </div>

        <div>
            <div v-on:click="toggleColorPicker" class="icon-container">
                <img src="../assets/color_icon.svg" alt="color picker" class="icon ">
            </div>
           
            <div class="icon-container burger hidden">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </div>  
        </div>
    </section>
     <ColorPicker v-if="colorPickerOpen"></ColorPicker>
</div>
</template>

<script>
import Search from './Search.vue'
import ColorPicker from './ColorPicker.vue'

export default {
  name: "SideBar",
  components: {
      Search,
      ColorPicker
  },
  data: function(){
    return{
        searchOpen: false,
        colorPickerOpen: false
    }
  },
  methods: {
      toggleSearch(){
          this.searchOpen = !this.searchOpen;
          this.$emit('openSearch');
      },
      toggleColorPicker(){
          this.colorPickerOpen = !this.colorPickerOpen;
      }
  }

};
</script>

<style lang="scss">
@import '../variables.scss';
.sidebar-container{
    display:grid;
    grid-template-columns: 70px auto;
    grid-template-rows: 100vh;
}
.sidebar{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  background:$red; 
  .first{
      .icon-container{
          margin-bottom: 30px;
      }
  }
}
.icon-container{
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: 0.3s ease;
    
    &:hover{
        @include darken-hover($red,4%);
        cursor: pointer;
    }
    &:active{
      @include darken-hover($red,6%);
    }  
}
.burger{
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &-line{
        width: 50%;
        height: 2px;
        margin: 2.5px 0;
        background: white;
    }
}
.hidden{
    height: 0;
}
</style>
