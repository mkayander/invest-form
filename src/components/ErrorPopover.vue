<script setup lang="ts">
import { ref } from "vue";
import { usePopperjs } from "vue-use-popperjs";

const props = defineProps<{
  show?: boolean;
  target: any;
}>();

const tooltip = ref();
usePopperjs(props.target, tooltip, {
  placement: "top-start",
  forceShow: props.show,
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    },
  ],
});
</script>

<template>
  <div class="root">
    <div ref="tooltip" id="tooltip" role="tooltip">
      <slot></slot>
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ErrorPopover",
};
</script>

<style scoped lang="scss">
#popcorn {
  display: inline-block;
  width: 134px;
  height: 120px;
  background-image: url("https://popper.js.org/images/popcorn-box.svg");
}

.root {
  #tooltip {
    display: inline-block;
    z-index: 20;
    background: #c75c5c;
    color: #fff;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 4px;
  }
}

#tooltip.vue-use-popperjs-none,
#tooltip.vue-use-popperjs-none #arrow::before {
  display: none;
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}

[data-popper-placement^="top"] #arrow {
  bottom: -4px;
}

[data-popper-placement^="bottom"] #arrow {
  top: -4px;
}

[data-popper-placement^="left"] #arrow {
  right: -4px;
}

[data-popper-placement^="right"] #arrow {
  left: -4px;
}
</style>
