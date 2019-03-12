<template>
  <div class="concept">
    <Title content="Typographie" />

    <Subtitle content="Une police sur mesure" />
    <Paragraph>
    Une police de caractère a été spécialement créée et dessinée pour Médiamétrie. Moderne et dynamique, elle est composée de 400 signes différents (caractères + symboles), 
    seul l’alphabet latin ayant été produit. Elle participe à l’identification de la marque au cœur de tous ses supports de communiation.</br>
    On l’utilisera principalement pour des titres, des en-têtes, avec une taille conséquente, afin de bien lire le contraste des pleins et des déliés. 
    </Paragraph>
    <Frame>
        <template  slot="frame">
        <p class="fontFamily-mediametrie">A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z </p>
        <p class="fontFamily-mediametrie">a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z</p>
        <p class="fontFamily-mediametrie">0  1  2  3  4  5  6  7  8  9 </p>
        <p class="fontFamily-mediametrie">à  é  @  #  $  €  &  *  (  {  /  - </p>
        </template>
        <template slot="code">
        <div>
            <p></p>
        </div>
        </template>
    </Frame>
   
   <Subtitle content="La Verdana en complément" />
    <Paragraph>
     Son dessin est très proche de celui de la typographie Médiamétrie, mais plus simple.</br>
     On l’utilisera donc pour les textes courants, les sous titres, etc.
    </Paragraph>
    <Frame>
        <template  slot="frame">
        <p class="font-v">A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z </p>
        <p class="font-v">a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z</p>
        <p class="font-v">0  1  2  3  4  5  6  7  8  9 </p>
        <p class="font-v">à  é  @  #  $  €  &  *  (  {  /  - </p>
        </template>
        <template slot="code">
        <div>
            <p></p>
        </div>
        </template>
    </Frame>
    
    <Subtitle content="Le choix des graisses" />
    <Paragraph>
     La typographie Médiamétrie est disponible en romain et italique dans 3 graisses différentes :
      Light, Regular et Bold. Cette palette permet une utilisation riche et variée.
    </Paragraph>
    <Frame simple>
        <template  slot="frame">
        <p class="fontFamily-mediametrie fontWeight-light">Finesse & Précision</p>
        </template>
        <template slot="code">
        <div>
            <p></p>
        </div>
        </template>
    </Frame>
    
  </div>
</template>

<script>

import Title from "../ui-components/title";
import Subtitle from "../ui-components/subtitle";
import Paragraph from "../ui-components/paragraph";
import Frame from "../ui-components/frame";  


export default {
  name: "Colors",
  components: {
    Title,
    Subtitle,
    Paragraph,
    Frame

  }
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';
    p:first-child{
        margin-top: 0;
    }
    .font-mm{
        font-family: 'Mediametrie';
        font-size: 22px;
    }
    .font-v{
        font-size: 22px;
    }
</style>
