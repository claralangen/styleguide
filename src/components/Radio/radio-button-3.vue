<template>
<div>
   <Subtitle content="Groupe de boutons"></Subtitle>
  <Frame>
    <template slot="frame">
      <el-radio-group v-model="radio">
        <el-radio-button label="1">Paris</el-radio-button>
        <el-radio-button label="2">Lima</el-radio-button>
        <el-radio-button label="3">Singapour</el-radio-button>
        <el-radio-button label="4">Bamako</el-radio-button>
      </el-radio-group>
    </template>
    <template slot="code">
      <div>
        <p>ceci est un texte pour le test : par la suite il y aura du code</p>
      </div>
    </template>
      </Frame>
</div>
</template>

<script>
import Title from "../../ui-components/title";
import Subtitle from '../../ui-components/subtitle';
import Frame from '../../ui-components/frame';

  export default {
    name:"RadioButton1",
    components:{
      Title,
      Subtitle,
      Frame
    },
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>

<style lang="scss">
    @import '../../variables';
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #FFF;
    background-color:$red;
    border-color: $red;
    box-shadow: -1px 0 0 0 $red;
}
.el-radio-button__inner:hover {
    color: $red;
}

</style>