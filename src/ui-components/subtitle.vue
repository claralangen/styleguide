<template>
  <h2>{{content}}</h2>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    content: String
  }
};
</script>


<style scoped lang="scss">
h2 {
    margin-top: 80px;
    font-family: Verdana-Italic;
    font-size: 20px;
    color: rgba(0,0,0,0.70);
    letter-spacing: 0;
} 
</style>
