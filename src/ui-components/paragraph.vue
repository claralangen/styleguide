<template>
  <p>{{content}}</p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    content: String
  }
};
</script>


<style scoped lang="scss">
p {
    margin-top: 25px;
    font-family: Verdana;
    font-size: 16px;
    color: rgba(0,0,0,0.50);
    letter-spacing: 0;
    line-height: 28px;
} 
</style>