<template>
  <section class="colorpicker">
    <ul class="color-list">
      <li class="color-item" v-for="test in colors"
          v-bind:key="test"
          v-bind:style="{ backgroundColor : test}"
      ></li>
    </ul>
  </section>
</template>

<script>

export default {
  name: "ColorPicker",
  data: function(){
    return{
      colors: ['#E20036','#E65F28','#FFD400','#79C24D','#62C4DD','#B73288','#E52D87','#B51434']
    }
  } 
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';
.colorpicker{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 70px;
  padding: 30px 15px;
  background: #FFFFFF;
  box-shadow: 1px 0 4px 0 rgba(0,0,0,0.13);
  
}
.color-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}
.color-item{
  width: 20px;
  height: 20px;
  margin: 15px;
  border-radius: 3px;
}
</style>