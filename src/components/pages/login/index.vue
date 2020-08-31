<template>
  <MainContainer>
    <LoginForm loginData="loginData" signUpHandler="signUpHandler" />
  </MainContainer>
</template>

<script>
import LoginForm from "./form";
import { MainContainer } from "./styles";

export default {
  name: "Login",
  components: {
    LoginForm,
    MainContainer,
  },
  data() {
    return {
      loginData: {
        email: "",
        password: "",
        phone: "",
        error: "",
      },
    };
  },
  methods: {
    signUpHandler() {
      console.log("sign");
    },
  },
};
</script>
