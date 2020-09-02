<template>
  <MainContainer>
    <slot></slot>
  </MainContainer>
</template>

<script>
import { MainContainer } from "./styles";
export default {
  name: "MainWrapper",
  components: {
    MainContainer,
  },
};
</script>