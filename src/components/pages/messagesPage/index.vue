<template>
  <MainContainer>
    <ChatsList
      :chatsData="chatsData"
      :changedChatId="changedChatId"
      :changeChatHandler="changeChatHandler"
      :isOpenCreateChatPopover="isOpenCreateChatPopover"
      :openCreateChatPopover="openCreateChatPopover"
      :closeCreateChatPopover="closeCreateChatPopover"
    />
    <MessagesContainer
      :changedChatId="changedChatId"
      :chatsData="chatsData"
      :newMessageForm="newMessageForm"
      :sendNewMessageHandler="sendNewMessageHandler"
      :isOpenSmilesContainer="isOpenSmilesContainer"
      :openSmilesPopover="openSmilesPopover"
      :closeSmilesPopover="closeSmilesPopover"
      :addSmileToMessage="addSmileToMessage"
      :changeMessageMode="changeMessageMode"
      :isMessageChangeMode="isMessageChangeMode"
      :changeMessageHandler="changeMessageHandler"
      :changedMessages="changedMessages"
      :clearMessageHandler="clearMessageHandler"
      :deleteMessages="deleteMessages"
      :setEditableValue="setEditableValue"
    />
  </MainContainer>
</template>

<script>
import MessagesContainer from "./messagesContainer";
import ChatsList from "./chatsList";
import firebase from "../../../utils/firebase";
import { MainContainer } from "./styles";
import { onAuthStateChanged } from "../../../utils";

export default {
  name: "MessagesPage",
  components: {
    MessagesContainer,
    ChatsList,
    MainContainer,
  },
  data() {
    return {
      chatsData: {},
      changedChatId: null,
      newMessageForm: {
        messageText: "",
      },
      isOpenCreateChatPopover: false,
      isOpenSmilesContainer: false,
      isMessageChangeMode: false,
      changedMessages: [],
    };
  },
  async created() {
    const data = await firebase.database();
    return data.ref("/chats").on("value", (res) => {
      if (res) {
        this.chatsData = res.val();
      }
    });
  },
  // async beforeDestroy() {
  //   const data = await firebase.database();

  //   data.ref("/chats").off();
  // },
  methods: {
    changeChatHandler(chatId) {
      this.changedChatId = chatId;
    },
    async sendNewMessageHandler() {
      const { messageText } = this.newMessageForm;
      const trimMessage = messageText.trim();

      const isEditMode = this.changedMessages.length > 0;

      if (isEditMode) {
        const [editableMessage] = this.changedMessages;

        try {
          await firebase
            .database()
            .ref(`chats/${this.changedChatId}/messages/${editableMessage}`)
            .update({
              text: trimMessage,
            });
          this.newMessageForm.messageText = "";
          this.changedMessages = [];
        } catch (err) {
          console.log(err, "error");
        }
      } else {
        const authData = await onAuthStateChanged();
        const { displayName, email, uid } = authData;
        const createdDate = new Date().getTime();
        if (trimMessage.length > 0) {
          try {
            await firebase
              .database()
              .ref(`chats/${this.changedChatId}/messages/${createdDate}`)
              .set({
                createdBy: {
                  name: displayName || email,
                  id: uid,
                },
                text: trimMessage,
              });
            this.newMessageForm.messageText = "";
          } catch (err) {
            console.log(err, "error");
          }
        }
      }
    },
    openCreateChatPopover() {
      this.isOpenCreateChatPopover = true;
    },
    closeCreateChatPopover() {
      this.isOpenCreateChatPopover = false;
    },
    openSmilesPopover() {
      this.isOpenSmilesContainer = true;
    },
    closeSmilesPopover() {
      this.isOpenSmilesContainer = false;
    },
    addSmileToMessage(smile) {
      const { messageText } = this.newMessageForm;
      this.newMessageForm.messageText = `${messageText}${smile}`;
    },
    changeMessageMode(status) {
      this.isMessageChangeMode = status;
    },
    changeMessageHandler(id) {
      const { changedMessages } = this;
      const indexOfExistingElement = changedMessages.indexOf(id);

      if (indexOfExistingElement === -1) {
        this.changedMessages = [...this.changedMessages, id];
      } else {
        this.changedMessages.splice(indexOfExistingElement, 1);
      }
    },
    clearMessageHandler() {
      this.changedMessages = [];
      this.newMessageForm.messageText = "";
    },
    async deleteMessages() {
      try {
        const promisesArray = [...this.changedMessages].map((elem) =>
          firebase
            .database()
            .ref(`chats/${this.changedChatId}/messages/${elem}`)
            .remove()
        );
        await Promise.all(promisesArray);
        this.changedMessages = [];
      } catch (err) {
        console.log(err, "error");
      }
    },
    setEditableValue() {
      const [editableMessage] = this.changedMessages;
      const changedChat = this.chatsData[this.changedChatId];

      if (!changedChat) {
        return;
      }
      const { text } = changedChat.messages[editableMessage];

      if (text) {
        this.newMessageForm.messageText = text;
      }
    },
  },
};
</script>
