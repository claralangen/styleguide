<template>
    <section id="nav">
      <router-link to="/">  
      <div class="logoContainer">
          <img src="../assets/logo.svg" alt="">
          <p class="logoSubtitle">styleguide</p>
      </div>
      </router-link>

      <div v-for="navItem in navItems" 
            :key="navItem.i" 
            >
        <div v-on:click=" showTabs(navItem)">
        <router-link :to="{name:navItem.route}" class="link" >            
          <p>{{navItem.title}}</p>
          <img v-if="navItem.showTabs != null" v-bind:class="{ rotate : navItem.showTabs}" src="../assets/arrow.svg" alt="flèche indicative">
        </router-link> 
        </div>

        <div v-if="navItem.showTabs != null && navItem.showTabs">
            <transition  v-for="section in navItem.sections" 
                        :key="section.id" 
                        >
            <div class="tabs" >
                <router-link :to="{name:section}">        
                {{section}}
                </router-link>     
            </div>
        </transition>
       </div>
        
     </div>
    </section>
</template>

<script>
export default {
name:"Nav",
data: function(){
    return{
        navItems: [
            { i: 0, route:"concept", title: "Le Concept"},
            { i: 1, route:"design", title: "Design", sections: ["Couleurs","Typographie","Iconographie","Photographies"], showTabs: false},
            { i: 2, route:"composants", title: "Composants", sections: ["Button","Radio Button","Input","Pop Up","Barre de progression","Checkbox"], showTabs: false},
            { i: 3, route:"templates", title: "Templates", sections: []},
            { i: 4, route:"mails", title: "Mails", sections: []}   
        ]
    }
},
methods: {
    showTabs(navItem) {
        if(navItem.showTabs != null){
        	navItem.showTabs = !navItem.showTabs
        } 
      }
}
}
</script>

<style lang="scss" scoped>
@import '../reset.scss';

#nav{
  display: flex;
  flex-direction: column;
  border: solid 1px #DEDEDE;
  overflow: scroll;
  .link{
    display: flex;
    justify-content: space-between;
    padding: 35px 30px;
    border-bottom: solid 1px #DEDEDE;
    cursor: pointer;
    p {
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
.tabs{
  display: flex;
  flex-direction: column;
  background: #F4F5F7;
  padding: 10px 20px;
  a{
    color: #7A7A7B;
    padding: 15px;
    font-size: 14px;
    margin: 5px 0;
    border-radius: 3px;
    &:hover{
      background-color: #EAECF0;
    }
    &:focus{
      background-color: #EAECF0;
    }
  }
}
.rotate{
  transform: rotate(180deg);
}
.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-6px);
  opacity: 0;
}

</style>