<template>
  <MainContainer>
    <LoginForm
      :loginData="loginData"
      :authHandler="authHandler"
      :isValidForm="isValidForm"
      :authWithGoogle="authWithGoogleHandler"
      type="AUTH"
    />
  </MainContainer>
</template>

<script>
import LoginForm from "../../common/loginForm";
import { MainContainer } from "./styles";
import { validateEmail } from "../../../utils";
import firebase from "../../../utils/firebase";
import { authWithGoogle } from "../../../utils";

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
        error: "",
      },
    };
  },
  computed: {
    isValidForm() {
      const { password, email } = this.loginData;
      const isValidEmail = validateEmail(email);

      return isValidEmail && password.length > 12 && password.length < 24;
    },
  },
  methods: {
    async authHandler() {
      const { email, password } = this.loginData;
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (result.user) {
        this.$router.push("ItemsPage");
      }
    },
    async authWithGoogleHandler() {
      const result = await authWithGoogle();

      if (result.user) {
        this.$router.push("ItemsPage");
      }
    },
  },
};
</script>
