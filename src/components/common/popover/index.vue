<template>
  <component :is="MainWrapper" v-if="isOpenPopover" ref="chatContainer">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "Popover",
  props: {
    isOpenPopover: Boolean,
    closePopover: Function,
    MainWrapper: Object,
  },
  methods: {
    focusInput() {
      this.$refs.chatContainer.$el.focus();
    },
    closePopoverHandler(event) {
      if (this.isOpenPopover) {
        const refElement = this.$refs.chatContainer.$el;
        if (!refElement.contains(event.target)) {
          this.closePopover();
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
};
</script>