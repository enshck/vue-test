<template>
  <ChatPopoverContainer v-if="isOpenCreateChatPopover">
    <input type="text" v-model="chatName" />
    <Button @click="createChatHandler">Добавить</Button>
  </ChatPopoverContainer>
</template>

<script>
import { Button } from "./styles";

export default {
  name: "ChatPopover",
  data() {
    return {
      chatName: "",
    };
  },
  components: {
    Button,
  },
  props: {
    createChatHandler: Function,
    isOpenCreateChatPopover: Boolean,
  },
};
</script>