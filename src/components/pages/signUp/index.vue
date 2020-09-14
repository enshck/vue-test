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
import { validateEmail, authWithGoogle } from "../../../utils";
import { signUpErrors } from "../../../utils/errors";

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
        name: "",
        error: "",
      },
    };
  },
  computed: {
    isValidForm() {
      const { password, email, name } = this.loginData;
      const isValidEmail = validateEmail(email);

      return (
        isValidEmail &&
        password.length > 6 &&
        password.length < 120 &&
        name.length > 1 &&
        name.length < 20
      );
    },
  },
  methods: {
    async signUpHandler() {
      const { email, password, name } = this.loginData;

      try {
        if (this.isValidForm) {
          const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

          if (result.user) {
            await result.user.updateProfile({
              displayName: name,
            });
            this.loginData.error = "";
            this.$router.push("/messages");
          }
        }
      } catch (err) {
        this.loginData.error = signUpErrors[err.code] || "Неизвестная ошибка";
      }
    },
    async authWithGoogleHandler() {
      const result = await authWithGoogle();

      if (result.user) {
        this.$router.push("/messages");
      }
    },
  },
};
</script>
