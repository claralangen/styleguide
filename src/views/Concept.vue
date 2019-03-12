<template>
  <div class="concept">
    <Title content="Le Concept" />
    <Subtitle content="Un outil digital" />
    <Paragraph>Parce que Médiamétrie fait aujourd’hui le lien avec ses panélistes via le Web, il était primordial de repenser la <strong>charte graphique </strong> établie pour le print.</br>
Les outils digitaux ( que ce soit sur smartphone, tablette, ordinateur, voire télévision) sont par essence <strong>intéractifs</strong>.</br>
Les codes visuels ne peuvent pas être les même que ceux d’une charte graphique prévue pour des supports imprimés; 
parce qu’on concoit des éléments sur lesquels on clique, on scroll, qu’on ouvre ou ferme, qui apparaissent, changent de couleur, etc.
    </Paragraph>
    <Subtitle content="Pensé pour qui ?" />
    <Paragraph>Le <strong>guide de style</strong> est à l’origine un document qui regroupe tous les éléments visuels d’un site, accompagnés du code qui les génére et d’explications. 
      C’est un outil autour duquel tous les corps de métiers peuvent se retrouver.</br>
      Le designer y va pour s’assurer de la cohérence visuelle du site.
    Le développeur y retrouve un guide clair pour l’écriture du CSS et des composants prêts à être utilisés.
    Les B.U.(buisness units) quant à eux peuvent sélectionner les différents éléments de questionnaire en fonction des attentes de leurs clients.
    </Paragraph>
  </div>
</template>

<script>

import Title from "../ui-components/title";
import Subtitle from "../ui-components/subtitle";
import Paragraph from "../ui-components/paragraph";

export default {
  name: "Concept",
  components: {
    Title,
    Subtitle,
    Paragraph,
  }
};
</script>

