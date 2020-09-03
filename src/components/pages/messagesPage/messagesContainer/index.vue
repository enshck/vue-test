<template>
  <MainContainer>
    <template v-if="changedChat">
      <MessageContainer ref="messageContainer">
        <MessageElement v-for="(value, key) in messagesData" :key="key">
          <InfoContainer>
            {{
            value.createdBy.name
            ? value.createdBy.name.split(" ")[0]
            : "Аноним"
            }}
            <span>({{ formatDistanceToNow(+key) }} ago)</span>
          </InfoContainer>
          {{ value.text }}
        </MessageElement>
      </MessageContainer>
      <SendMessageInputContainer>
        <textarea
          v-model="newMessageForm.messageText"
          :placeholder="`Enter -- Отправить сообщение\nShift + Enter -- Новая строка`"
          @keydown.enter.exact="sendMessage"
        ></textarea>
      </SendMessageInputContainer>
    </template>
    <NotChangedChatContainer v-if="!changedChat">Чат не выбран</NotChangedChatContainer>
  </MainContainer>
</template>

<script>
import {
  MainContainer,
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
  methods: {
    sendMessage() {
      this.sendNewMessageHandler();
      const messageContainerRef = this.$refs.messageContainer;
      messageContainerRef.scrollTop = messageContainerRef.scrollHeight;
    },
  },
};
</script>
