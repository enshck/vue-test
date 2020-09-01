<template>
  <MainContainer v-if="$route.path === '/ItemsPage'">
    Example app
    <StyledButton @click="signOutHandler">Выйти</StyledButton>
  </MainContainer>
</template>

<script>
import { MainContainer, StyledButton } from "./styles";
import firebase from "../../../utils/firebase";

export default {
  name: "Header",
  components: {
    MainContainer,
    StyledButton,
  },
  methods: {
    async signOutHandler() {
      await firebase.auth().signOut();
      this.$router.push("/login");
    },
  },
};
</script>
