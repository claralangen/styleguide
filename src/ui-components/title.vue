<template>
  <h1>{{content}}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    content: String
  }
};
</script>


<style scoped lang="scss">
h1 {
    margin-bottom: 100px;
    font-family: Mediametrie-Bold;
    font-size: 40px;
    color: rgba(0,0,0,0.70);
    letter-spacing: 0;
} 
</style>
