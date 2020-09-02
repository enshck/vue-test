
<template>
  <MainContainer>
    <Header />
    <MainWrapper>
      <router-view />
    </MainWrapper>
    <GlobalStyles />
  </MainContainer>
</template>

<script>
import styled from "vue-styled-components";

import Header from "./components/common/header";
import GlobalStyles from "./components/common/styles/globalStyles";
import MainWrapper from "./components/common/mainWrapper";

const MainContainer = styled.div`
  height: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

export default {
  name: "App",
  components: {
    Header,
    GlobalStyles,
    MainWrapper,
    MainContainer,
  },
};
</script>