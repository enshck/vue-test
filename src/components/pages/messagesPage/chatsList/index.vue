<template>
  <MainContainer :changedChatId="Boolean(changedChatId)">
    <ChatElement
      v-for="(chatData, key) in chatsData"
      :key="key"
      :isChanged="changedChatId === key"
      @click="() => changeChatHandler(key)"
    >
      <ChatTitle>{{chatData.name}}</ChatTitle>
    </ChatElement>
    <ChatPopoverMainContainer>
      <ChatElement @click="openCreateChatPopover">
        <AddChatTitle>Добавить чат</AddChatTitle>
      </ChatElement>
      <ChatPopover
        :isOpenCreateChatPopover="isOpenCreateChatPopover"
        :closeCreateChatPopover="closeCreateChatPopover"
      />
    </ChatPopoverMainContainer>
  </MainContainer>
</template>

<script>
import {
  MainContainer,
  ChatElement,
  ChatTitle,
  AddChatTitle,
  ChatPopoverMainContainer,
} from "./styles";
import ChatPopover from "./chatPopover";

export default {
  name: "ChatList",
  components: {
    MainContainer,
    ChatElement,
    ChatTitle,
    AddChatTitle,
    ChatPopoverMainContainer,
    ChatPopover,
  },
  props: {
    chatsData: Object,
    changedChatId: String || null,
    changeChatHandler: Function,
    openCreateChatPopover: Function,
    closeCreateChatPopover: Function,
    isOpenCreateChatPopover: Boolean,
  },
};
</script>
