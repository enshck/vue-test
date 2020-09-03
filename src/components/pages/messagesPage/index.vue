<template>
  <MainContainer>
    <ChatsList
      :chatsData="chatsData"
      :changedChatId="changedChatId"
      :changeChatHandler="changeChatHandler"
      :createChatHandler="createChatHandler"
      :isOpenCreateChatPopover="isOpenCreateChatPopover"
      :openCreateChatPopover="openCreateChatPopover"
      :closeCreateChatPopover="closeCreateChatPopover"
    />
    <MessagesContainer
      :changedChatId="changedChatId"
      :chatsData="chatsData"
      :newMessageForm="newMessageForm"
      :sendNewMessageHandler="sendNewMessageHandler"
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
    };
  },
  async created() {
    const data = await firebase.database();
    return data.ref("/chats").on("value", (res) => {
      if (res) {
        console.log(res.val());
        this.chatsData = res.val();
      }
    });
  },
  methods: {
    changeChatHandler(chatId) {
      this.changedChatId = chatId;
    },
    async sendNewMessageHandler() {
      const authData = await onAuthStateChanged();
      const { displayName, email, uid } = authData;
      const { messageText } = this.newMessageForm;
      const createdDate = new Date().getTime();

      try {
        await firebase
          .database()
          .ref(`chats/${this.changedChatId}/messages/${createdDate}`)
          .set({
            createdBy: {
              name: displayName || email,
              id: uid,
            },
            text: messageText,
          });
        this.newMessageForm.messageText = "";
      } catch (err) {
        console.log(err, "error");
      }
    },
    async createChatHandler() {},
    openCreateChatPopover() {
      this.isOpenCreateChatPopover = true;
    },
    closeCreateChatPopover() {
      this.isOpenCreateChatPopover = false;
    },
  },
};
</script>
