<template>
<div>
   <Subtitle content="Avec bordures"></Subtitle>
  <Frame>
    <template slot="frame">
      <div>
        <el-radio v-model="radio" label="1" border>Option A</el-radio>
        <el-radio v-model="radio" label="2" border>Option B</el-radio>
      </div>
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
    .el-radio__label {
        font-size: 18px;
        padding-left: 15px;
    }
    .el-radio__inner {
        width: 16px;
        height: 16px;
    }
    .el-radio__input.is-checked {
        .el-radio__inner{
            border-color: $red;
            background:$red;
        }
        +.el-radio__label{
            color: $red;
        }
    }
    .el-radio.is-bordered.is-checked {
        border: 2px solid $red;
    }
    .el-radio.is-bordered {
        padding: 16px 30px 14px 10px ;
        height: auto;
    }

</style>