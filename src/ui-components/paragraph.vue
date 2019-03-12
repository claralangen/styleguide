<template>
  <p><slot></slot></p>
</template>

<script>
export default {
  name: "Paragraph"
};
</script>


<style lang="scss">
p {
    margin-top: 25px;
    font-family: Verdana;
    font-size: 16px;
    color: rgba(0,0,0,0.50);
    letter-spacing: 0;
    line-height: 28px;
} 
strong{
  font-weight: bold;
}
</style>