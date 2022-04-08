<script setup lang="ts">
import { ref, computed } from "vue";
import { usePopperjs, Trigger } from "vue-use-popperjs";

const props = defineProps<{
  show?: boolean;
  target: any;
}>();

// const popcorn = ref();
const tooltip = ref();
// const forceShow = ref(props.show);
// const useDelayOnMouseover = ref(true);
// const delayOnMouseover = computed(() => (useDelayOnMouseover.value ? 300 : 0));
// const useDelayOnMouseout = ref(true);
// const delayOnMouseout = computed(() => (useDelayOnMouseout.value ? 300 : 0));
const { visible } = usePopperjs(props.target, tooltip, {
  // trigger,
  // trigger: 'manual',
  forceShow: props.show,
  // delayOnMouseover,
  // delayOnMouseout,
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
    <!--    <div-->
    <!--      :tabindex="trigger === 'focus' ? 0 : undefined"-->
    <!--      ref="popcorn"-->
    <!--      id="popcorn"-->
    <!--      aria-describedby="tooltip"-->
    <!--    ></div>-->
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
/*#root {*/
/*  background-color: #30263d;*/
/*  font-family: -apple-system, Helvetica Neue, Segoe UI, Roboto, Oxygen, Ubuntu,*/
/*    Cantarell, Open Sans, sans-serif;*/
/*  text-transform: uppercase;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  height: 220px;*/
/*}*/

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
