<template>
  <Popover
    :isOpenPopover="isOpenContextMenuPopover"
    :closePopover="closeContextMenuPopover"
    :MainWrapper="ContextMenuPopoverContainer"
  >
    <MainContainer>
      <ContextMenuElement>Редактировать</ContextMenuElement>
      <ContextMenuElement>Удалить</ContextMenuElement>
    </MainContainer>
  </Popover>
</template>

<script>
import {
  MainContainer,
  ContextMenuElement,
  ContextMenuPopoverContainer,
} from "./styles";
import Popover from "../../../../common/popover";

export default {
  name: "ContextMenuPopover",
  data() {
    return {
      ContextMenuPopoverContainer,
    };
  },
  components: {
    Popover,
    MainContainer,
    ContextMenuElement,
  },
  props: {
    isOpenContextMenuPopover: Boolean,
    closeContextMenuPopover: Function,
  },
};
</script>