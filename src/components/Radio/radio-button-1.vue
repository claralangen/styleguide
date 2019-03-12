<template>
<div>
   <Subtitle content="Usage de base"></Subtitle>
  <Frame>
    <template slot="frame">
      <div>
        <el-radio v-model="radio" label="1">Option A</el-radio>
        <el-radio v-model="radio" label="2">Option B</el-radio>
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
</style>