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
            <InfoContainer>
              {{
              value.createdBy.name
              ? value.createdBy.name.split(" ")[0]
              : "Аноним"
              }}
              <span>({{ formatDistanceToNow(+key) }} ago)</span>
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
import { formatDistanceToNow } from "date-fns";

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
} from "./styles";
import SmilesPopover from "./smilesPopover";

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
    SmilesContainer,
    SmilesPopover,
    MessageSubElement,
    StyledCheckboxContainer,
    StyledButton,
    EditControlContainer,
    CancelButton,
    Controls,
    MessageMainContainer,
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
  },
};
</script>
