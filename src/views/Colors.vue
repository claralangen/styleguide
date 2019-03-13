<template>
  <div class="concept">
    <Title content="Couleurs" />
    <Subtitle content="Nuances principales" />
    <Paragraph> Osez la couleur !</br>
    Notre richesse et la diversité de nos activités s’expriment aussi dans la couleur.</br></br>
    9 couleurs (encore plus que le drapeau LGBT) compose la palette, auxquelles s’ajoutent toutes leurs nuances complémentaires claires et foncées. 
    Osez la couleur dans vos graphisme et vos pictogrammes.</br></br>
    En ce qui concerne le web, gardez toujours en tête que la hiérarchie est primordiale pour guider l’utilisateur. 
    La règle des 60% 30% 10% fonctionne bien pour établir un équilibre: 
    La plus grande partie devrait aller à la teinte dominante, le tiers de la composition prend la couleur secondaire et 10% va à la couleur qui aide à faire les accents. 
    Une telle proportion est considérée comme agréable pour les yeux car elle permet de percevoir progressivement tous les éléments visuels.
   </Paragraph>
    <div class="color-group">
       <ul class="color-list" v-for="color in colors" v-bind:key="color.id">
        <li class="color-item"
            v-for="shade in color"
            v-bind:style="{ backgroundColor : shade }"
            v-on:click = "copyToClipboard"
        >
        {{shade}}
        </li>
      </ul>
    </div>
   
    <Subtitle content="Tons de gris" />
    <Paragraph>
        Sur le web on utilise rarement du noir pur, on lui préferera une déclinaison de tons de gris, moins agressif pour les yeux.</br>
        Les tons de gris sont utilisés en général pour le texte, les fonds, les lignes et les bordures.
        Mais on peut aussi les retrouver pour des icones ou des boutons.
    </Paragraph>
    
    <ul class="color-group">
        <li class="color-item grey" v-for="grey in greys"
            v-bind:key="grey"
            v-bind:style="{ backgroundColor : grey }"
            v-on:click = "copyToClipboard"
        >
        {{grey}}
        </li>
    </ul>
  </div>
</template>

<script>

import Title from "../ui-components/title";
import Subtitle from "../ui-components/subtitle";
import Paragraph from "../ui-components/paragraph";


export default {
  name: "Colors",
  components: {
    Title,
    Subtitle,
    Paragraph
  },
  data(){
      return{
          colors: {
              red: ['#E20036','#E33960','#E3718C','#E3AAB7'],
              orange: ['#E65F28','#F19A7E','#F2B3A1','#F8D8CB'],
              yellow: ['#FFD400','#FAE05C','#F8E999','#FCF3C8'],
              green: ['#79C24D','#AAD35D','#C0DC8B','#DCECBD'],
              blue: ['#62C4DD','#81CFE5','#89D2E5','#CBE9F2'],
              purple: ['#B73288','#C965A5','#D78CBC','#E1A9CD'],
              cardinal: ['#B51434','#D2415E','#F38C9F','#F7BDC9'],
              pink: ['#E52D87','#EE66A4','#F18DBA','#F6BCD5'],  
          },
          greys: ['#4B4B4B','#838383','#EAECF0','#F4F5F7']
      }
  },
  methods:{
      copyToClipboard(event){
          const copyText = event.target.innerText;
          document.execCommand( 'copy' , copyText );
          event.target.innerHTML = 'COPIÉ  <span style="font-size:15px;"> &#128521<span>';
          intervalID = setTimeout( ()=>{
            event.target.innerText = copyText;
          }, 2000
          )
      }
    }
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';
.color-group{
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
}
.color-list{
    overflow: hidden;
    margin: 50px 60px 0 0;
    border-radius: 6px;
}
.color-item{
  width: 160px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  font-size: 12px;
  mix-blend-mode: multiply;
  &.grey{
      border-radius: 6px;
      margin: 20px 60px 0 0;

  }
  &:hover{
      cursor: pointer;
      box-shadow: inset 4px 10px 0px 200px rgba(0,0,0,0.1);
  }
}
</style>
