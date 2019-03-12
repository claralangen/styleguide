import Vue from "vue";
import Router from "vue-router";
import Concept from "./views/Concept.vue";
import Colors from "./views/Colors.vue";
import Typo from "./views/Typo.vue";
import Icono from "./views/Icono.vue";
import Photo from "./views/Photo.vue";
import Components from "./views/Components.vue";
import Radio from "./views/Radio.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "concept",
      component: Concept
    },
    ///////////////     D E S I G N    //////////////
    {
      path: "/design",
      name: "design",
      component: Colors
    },
    {
      path: "/design/couleurs",
      name: "Couleurs",
      component: Colors
    },
    {
      path: "/design/typographie",
      name: "Typographie",
      component: Typo
    },
    {
      path: "/design/iconographie",
      name: "Iconographie",
      component: Icono
    },
    {
      path: "/design/photographies",
      name: "Photographies",
      component: Photo
    },
    ///////////////     C O M P O S A N T S    //////////////
    {
      path: "/composants",
      name: "Composants",
      component: Components
    },
    {
      path: "/composants/button",
      name: "Button",
      component: Components
    },
    {
      path: "/composants/radio-button",
      name: "Radio Button",
      component: Radio
    }
  ]
});
