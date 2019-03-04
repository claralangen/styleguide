<template>
  <section class="sidebar">
        <div class="first">
            <div class="icon-container">
                <img src="../assets/search_icon.svg" alt="recherche" class="icon">
            </div>
            <a class="icon-container" href="https://www.mediametrie.fr/fr">
                <img src="../assets/m_icon.svg" alt="médiamétrie" class="icon">
            </a>
            <a class="icon-container" href="https://www.touchbymediametrie.com/index.php">
                <img src="../assets/t_icon.svg" alt="touchbymediametrie" class="icon">
            </a>       
        </div>

        <div>
            <div v-on:click="$emit('color')" class="icon-container">
                <img src="../assets/color_icon.svg" alt="color picker" class="icon ">
            </div>
            <div class="icon-container burger hidden">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </div>
            
        </div>

    </section>
</template>

<script>
export default {
  name: "SideBar",
  data: function(){
      return{
          click : 'none'
      }
  }

};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

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
        background: darken($red, 4%);
        cursor: pointer;
    }
    &:active{
       background: darken($red, 6%);
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
