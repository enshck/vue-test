<template>
  <MainContainer>
    <MessageMainContainer v-show="changedChat">
      <EditControlContainer v-if="isChangedMessages">
        <Controls>
          <StyledButton
            @click="setEditableValue"
            v-if="Boolean(changedMessages.length < 2)"
          >Редактировать</StyledButton>
          <StyledButton @click="deleteMessages">Удалить</StyledButton>
        </Controls>
        <CancelButton @click="clearMessageHandler">Отмена</CancelButton>
      </EditControlContainer>
      <MobileHeader>
        <img src="../../../../assets/back.png" alt="back" @click="() => changeChatHandler(null)" />
      </MobileHeader>
      <MessageContainer ref="messageContainer">
        <MessageElement
          v-for="(value, key) in messagesData"
          :key="key"
          @dblclick="() => changeMessageHandler(key)"
          @click.stop.prevent="() => isChangedMessages && changeMessageHandler(key)"
          :isEditMode="isChangedMessages"
        >
          <transition name="fade">
            <StyledCheckboxContainer v-if="isChangedMessages">
              <input
                type="checkbox"
                name="messageCheckbox"
                :id="key"
                :value="key"
                v-model="changedMessages"
              />
              <span />
            </StyledCheckboxContainer>
          </transition>
          <MessageSubElement>
            <InfoContainer v-if="getAuthorOfPrevMessage(key)">
              {{
              value.createdBy.name
              ? value.createdBy.name.split(" ")[0]
              : "Аноним"
              }}
              <span>({{ format(+key, 'HH:mm, d MMM') }})</span>
            </InfoContainer>
            {{ value.text }}
          </MessageSubElement>
        </MessageElement>
      </MessageContainer>
    </MessageMainContainer>
    <SendMessageInputContainer v-if="changedChat">
      <textarea
        v-model="newMessageForm.messageText"
        :placeholder="`Enter -- Отправить сообщение\nShift + Enter -- Новая строка`"
        @keydown.enter.exact="sendMessage"
      />
      <SmilesContainer>
        <div @click="openSmilesPopover">😃</div>
        <SmilesPopover
          :isOpenSmilesPopover="isOpenSmilesContainer"
          :closeSmilesPopover="closeSmilesPopover"
          :addSmileToMessage="addSmileToMessage"
        />
      </SmilesContainer>
    </SendMessageInputContainer>
    <NotChangedChatContainer v-if="!changedChat">Чат не выбран</NotChangedChatContainer>
  </MainContainer>
</template>

<script>
import { format } from "date-fns";
import firebase from "../../../../utils/firebase";

import {
  MainContainer,
  NotChangedChatContainer,
  MessageElement,
  SendMessageInputContainer,
  InfoContainer,
  MessageContainer,
  SmilesContainer,
  MessageSubElement,
  StyledCheckboxContainer,
  StyledButton,
  EditControlContainer,
  CancelButton,
  Controls,
  MessageMainContainer,
  MobileHeader,
} from "./styles";
import SmilesPopover from "./smilesPopover";

export default {
  name: "MessagesContainer",
  data() {
    return {
      format,
    };
  },
  components: {
    MainContainer,
    NotChangedChatContainer,
    MessageElement,
    SendMessageInputContainer,
    InfoContainer,
    MessageContainer,
    SmilesContainer,
    SmilesPopover,
    MessageSubElement,
    StyledCheckboxContainer,
    StyledButton,
    EditControlContainer,
    CancelButton,
    Controls,
    MessageMainContainer,
    MobileHeader,
  },
  props: {
    changedChatId: String,
    chatsData: Object,
    newMessageForm: Object,
    sendNewMessageHandler: Function,
    isOpenSmilesContainer: Boolean,
    openSmilesPopover: Function,
    closeSmilesPopover: Function,
    addSmileToMessage: Function,
    changeMessageMode: Function,
    isMessageChangeMode: Boolean,
    changeMessageHandler: Function,
    changedMessages: Array,
    clearMessageHandler: Function,
    deleteMessages: Function,
    setEditableValue: Function,
    changeChatHandler: Function,
  },
  computed: {
    changedChat() {
      const chat = this.chatsData[this.changedChatId];
      return chat;
    },
    messagesData() {
      return this.changedChat ? this.changedChat.messages : null;
    },
    isChangedMessages() {
      return Boolean(this.changedMessages.length > 0);
    },
    userId() {
      return firebase.auth().currentUser.uid;
    },
  },
  mounted() {
    this.$watch(
      () => this.changedChatId,
      () => {
        const messageContainerRef = this.$refs.messageContainer.$el;
        messageContainerRef.scrollTop = messageContainerRef.scrollHeight;
      }
    );
  },
  methods: {
    async sendMessage() {
      await this.sendNewMessageHandler();
      const messageContainerRef = this.$refs.messageContainer.$el;
      messageContainerRef.scrollTop = messageContainerRef.scrollHeight;
    },
    getAuthorOfPrevMessage(currentMessageId) {
      const entries = Object.entries(this.messagesData);
      let prevMessageIndex = null;
      const currentMessageData = this.messagesData[currentMessageId];

      entries.forEach((elem, key) => {
        const [index] = elem;

        if (index === currentMessageId) {
          prevMessageIndex = key - 1;
        }
      });

      if (prevMessageIndex < 0) {
        return true;
      }
      // eslint-disable-next-line no-unused-vars
      const [prevMessageId, prevMessageData] = entries[prevMessageIndex];

      return prevMessageData.createdBy.id !== currentMessageData.createdBy.id;
    },
  },
};
</script>
