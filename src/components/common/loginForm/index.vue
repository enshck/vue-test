<template>
  <FormMainContainer>
    <TabContainer>
      <StyledNavLink>
        <router-link to="/login">Войти</router-link>
      </StyledNavLink>
      <StyledNavLink>
        <router-link to="/signUp">Создать аккаунт</router-link>
      </StyledNavLink>
    </TabContainer>
    <ControlsContainer>
      <InputContainer>
        <label>Email:</label>
        <SignUpInput type="text" placeholder="example@example.com" v-model="loginData.email" />
      </InputContainer>
      <InputContainer>
        <label>Пароль:</label>
        <SignUpInput type="password" placeholder="**********" v-model="loginData.password" />
      </InputContainer>
      <SubmitButton
        @click="authHandler"
        :isBlocked="!isValidForm"
      >{{ type === "AUTH" ? "Войти" : "Регистрация" }}</SubmitButton>
      <Social>
        <img src="../../../assets/google.png" alt="google" @click="authWithGoogle" />
      </Social>
    </ControlsContainer>
    <ErrorMessage v-if="loginData.error">{{ loginData.error }}</ErrorMessage>
  </FormMainContainer>
</template>

<script>
import {
  FormMainContainer,
  SubmitButton,
  SignUpInput,
  ErrorMessage,
  TabContainer,
  StyledNavLink,
  ControlsContainer,
  InputContainer,
  Social,
} from "./styles";

export default {
  name: "LoginForm",
  components: {
    FormMainContainer,
    SubmitButton,
    SignUpInput,
    ErrorMessage,
    TabContainer,
    StyledNavLink,
    ControlsContainer,
    InputContainer,
    Social,
  },
  props: {
    loginData: Object,
    authHandler: Function,
    type: String,
    isValidForm: Boolean,
    authWithGoogle: Function,
  },
};
</script>
