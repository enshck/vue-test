<template>
  <Popover
    :isOpenPopover="isOpenSmilesPopover"
    :closePopover="closeSmilesPopover"
    :MainWrapper="SmilesPopoverContainer"
  >
    <MainContainer>
      <SmileContainer
        v-for="smile in smilesList"
        :key="smile.key"
        @click="() => addSmileToMessage(smile)"
      >{{smile}}</SmileContainer>
    </MainContainer>
  </Popover>
</template>

<script>
import {
  SmilesPopoverContainer,
  MainContainer,
  SmileContainer,
} from "./styles";
import Popover from "../../../../common/popover";
import { smilesList } from "../../../../../constants";

export default {
  name: "SmilesPopover",
  data() {
    return {
      SmilesPopoverContainer,
      smilesList,
    };
  },
  components: {
    Popover,
    MainContainer,
    SmileContainer,
  },
  props: {
    isOpenSmilesPopover: Boolean,
    closeSmilesPopover: Function,
    addSmileToMessage: Function,
  },
};
</script>