<template>
  <MainContainer>
    <ChatElement
      v-for="(chatData, key) in chatsData"
      :key="key"
      :isChanged="changedChatId === key"
      @click="() => changeChatHandler(key)"
    >
      <ChatTitle>{{chatData.name}}</ChatTitle>
    </ChatElement>
  </MainContainer>
</template>

<script>
import { MainContainer, ChatElement, ChatTitle } from "./styles";
export default {
  name: "ChatList",
  components: {
    MainContainer,
    ChatElement,
    ChatTitle,
  },
  props: {
    chatsData: Object,
    changedChatId: String || null,
    changeChatHandler: Function,
  },
};
</script>
