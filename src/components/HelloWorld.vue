<template>
  <MainContainer>
    <h1 v-for="message in messages" :key="message.id">{{ message }}</h1>
    <div @click="randomSort" class="submitButton">Random</div>
    <form class="inputsContainer">
      <input
        v-for="inputData in formsInputs"
        v-model="formData[inputData.name]"
        :key="inputData.id"
        :type="inputData.type"
      />
      <div v-on:click="submitButton" class="submitButton">Submit</div>
      <div>{{ ipAddress }}</div>
      <div>{{ `${isAuth}` }}</div>
      <IncrementButton @click="setAuth">Set Auth Status</IncrementButton>
    </form>
  </MainContainer>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import { formsInputs } from "../constants";
import { MainContainer, IncrementButton } from "./styles";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    MainContainer,
    IncrementButton,
  },
  data: () => ({
    messages: [
      "Hello world-0",
      "Hello world-1",
      "Hello world-2",
      "Hello world-3",
      "Hello world-4",
    ],
    formData: {
      name: "",
      surname: "",
      email: "",
      password: "",
      age: "",
    },
    formsInputs,
  }),
  methods: {
    ...mapMutations(["setAuthStatus"]),
    randomSort() {
      this.messages = this.messages.sort(() => 0.5 - Math.random());
    },
    submitButton() {
      const formData = { ...this.formData };
      console.log(formData, "dat");
    },
    setAuth() {
      this.setAuthStatus(!this.isAuth);
    },
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
    }),
    ipAddress() {
      return "10.10.10.10";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .mainContainer {
  border: 1px solid red;
} */
.submitButton {
  border: 1px solid red;
  max-width: 200px;
  margin: 0 auto;
  padding: 10px;
  cursor: pointer;
  user-select: none;
}
.inputsContainer {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: 20px auto;
}

.inputsContainer input {
  margin-top: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
