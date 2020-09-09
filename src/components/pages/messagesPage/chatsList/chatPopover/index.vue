<template>
  <Popover
    :isOpenPopover="isOpenCreateChatPopover"
    :closePopover="closeCreateChatPopover"
    :MainWrapper="ChatPopoverContainer"
  >
    <input type="text" v-model="chatName" />
    <Button @click="createChatHandler" :isBlocked="!isValidNewChatForm">Добавить</Button>
  </Popover>
</template>

<script>
import { format } from "date-fns";

import { Button, ChatPopoverContainer } from "./styles";
import { onAuthStateChanged } from "../../../../../utils";
import firebase from "../../../../../utils/firebase";
import Popover from "../../../../common/popover";

export default {
  name: "ChatPopover",
  data() {
    return {
      chatName: "",
      ChatPopoverContainer,
    };
  },
  components: {
    Button,
    Popover,
  },
  props: {
    isOpenCreateChatPopover: Boolean,
    closeCreateChatPopover: Function,
  },
  methods: {
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
  computed: {
    isValidNewChatForm() {
      return this.chatName.length > 1 && this.chatName.length < 12;
    },
  },
};
</script>