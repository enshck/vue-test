
<template>
  <div>
    <Header />
    <router-view />
    <GlobalStyles />
  </div>
</template>

<script>
import Header from "./components/common/header";
import GlobalStyles from "./components/common/styles/globalStyles";

export default {
  name: "App",
  components: {
    Header,
    GlobalStyles,
  },
};
</script>