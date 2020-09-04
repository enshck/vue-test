<template>
  <ChatPopoverContainer v-if="isOpenCreateChatPopover" ref="chatContainer">
    <input type="text" v-model="chatName" />
    <Button @click="createChatHandler" :isBlocked="!isValidNewChatForm">Добавить</Button>
  </ChatPopoverContainer>
</template>

<script>
import { format } from "date-fns";

import { Button, ChatPopoverContainer } from "./styles";
import { onAuthStateChanged } from "../../../../../utils";
import firebase from "../../../../../utils/firebase";

export default {
  name: "chatPopover",
  data() {
    return {
      chatName: "",
    };
  },
  components: {
    Button,
    ChatPopoverContainer,
  },
  props: {
    isOpenCreateChatPopover: Boolean,
    closeCreateChatPopover: Function,
  },
  methods: {
    focusInput() {
      this.$refs.chatContainer.$el.focus();
    },
    closePopoverHandler(event) {
      if (this.isOpenCreateChatPopover) {
        const refElement = this.$refs.chatContainer.$el;
        if (!refElement.contains(event.target)) {
          this.closeCreateChatPopover();
        }
      }
    },
    async createChatHandler() {
      const authData = await onAuthStateChanged();
      const { uid } = authData;

      if (this.isValidNewChatForm) {
        try {
          await firebase
            .database()
            .ref(`chats/${new Date().valueOf()}`)
            .set({
              created: format(new Date(), "yyyy-MM-dd"),
              createdBy: uid,
              messages: {},
              name: this.chatName,
            });
          this.chatName = "";
          this.closeCreateChatPopover();
        } catch (err) {
          console.log(err, "error");
        }
      }
    },
  },
  created() {
    document.addEventListener("mousedown", this.closePopoverHandler);
  },
  beforeDestroy() {
    document.removeEventListener("mousedown", this.closePopoverHandler);
  },
  computed: {
    isValidNewChatForm() {
      return this.chatName.length > 1 && this.chatName.length < 12;
    },
  },
};
</script>