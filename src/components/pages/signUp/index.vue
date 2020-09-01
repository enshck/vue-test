<template>
  <MainContainer>
    <LoginForm
      :loginData="loginData"
      :authHandler="signUpHandler"
      :isValidForm="isValidForm"
      :authWithGoogle="authWithGoogleHandler"
      type="SIGN_UP"
    />
  </MainContainer>
</template>

<script>
import LoginForm from "../../common/loginForm";
import { MainContainer } from "./styles";
import firebase from "../../../utils/firebase";
import { validateEmail } from "../../../utils";
import { authWithGoogle } from "../../../utils";

export default {
  name: "SignUp",
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
    async signUpHandler() {
      const { email, password } = this.loginData;
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

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
