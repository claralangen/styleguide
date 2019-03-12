<template>
  <div>
     <Title content="Radio Button"></Title>
    <RadioButton1></RadioButton1>
    <RadioButton2></RadioButton2>
    <RadioButton3></RadioButton3>
  </div>
</template>

<script>

import Title from "../ui-components/title";
import RadioButton1 from "../components/Radio/radio-button-1";
import RadioButton2 from "../components/Radio/radio-button-2";
import RadioButton3 from "../components/Radio/radio-button-3";

export default {
  name: "Concept",
  components: {
    Title,
    RadioButton1,
    RadioButton2,
    RadioButton3
  }
};
</script>