<template>
  <MainContainer>
    <ChangedChatContainer v-if="changedChat">
      <MessageContainer>
        <MessageElement v-for="(value, key) in messagesData" :key="key">
          <InfoContainer
            >{{
              value.createdBy.name
                ? value.createdBy.name.split(" ")[0]
                : "Аноним"
            }}
            <span>({{ formatDistanceToNow(+key) }} ago)</span></InfoContainer
          >
          {{ value.text }}
        </MessageElement>
      </MessageContainer>
      <SendMessageInputContainer>
        <textarea
          v-model="newMessageForm.messageText"
          placeholder="Введите сообщение и нажмите Shift + Enter"
          @keydown.enter.shift.prevent="sendNewMessageHandler"
        ></textarea>
      </SendMessageInputContainer>
    </ChangedChatContainer>
    <NotChangedChatContainer v-if="!changedChat"
      >Чат не выбран</NotChangedChatContainer
    >
  </MainContainer>
</template>

<script>
import {
  MainContainer,
  ChangedChatContainer,
  NotChangedChatContainer,
  MessageElement,
  SendMessageInputContainer,
  InfoContainer,
  MessageContainer,
} from "./styles";
import { formatDistanceToNow } from "date-fns";

export default {
  name: "MessagesContainer",
  data() {
    return {
      formatDistanceToNow,
    };
  },
  components: {
    MainContainer,
    ChangedChatContainer,
    NotChangedChatContainer,
    MessageElement,
    SendMessageInputContainer,
    InfoContainer,
    MessageContainer,
  },
  props: {
    changedChatId: String,
    chatsData: Object,
    newMessageForm: Object,
    sendNewMessageHandler: Function,
  },
  computed: {
    changedChat() {
      const chat = this.chatsData[this.changedChatId];
      return chat;
    },
    messagesData() {
      return this.changedChat ? this.changedChat.messages : null;
    },
  },
};
</script>
