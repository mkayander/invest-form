<script setup lang="ts">
defineProps<{
  direction: "reduction" | "growth";
}>();
</script>

<template>
  <button
    :class="{
      [$style.root]: true,
      [$style.growth]: direction === 'growth',
      [$style.reduction]: direction === 'reduction',
    }"
    type="submit"
    :data-direction="direction"
  >
    <span :class="$style.left">
      <img src="@/assets/Arrow.png" alt="arrow" />
    </span>
    <span :class="$style.right">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
export default {
  name: "SendButton",
};
</script>

<style module lang="scss">
.root {
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: none;
  width: 100%;
  height: 44px;
  border-radius: 4px;
  overflow: hidden;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.5) 0 -1px 1px;

  //.inner {
  //  position: absolute;
  //}

  &:hover {
    cursor: pointer;
  }

  .left {
    //width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 11px;

    position: absolute;
    //top: 50%;
    //left: 0;
  }

  .right {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 98px;
    display: flex;
    justify-content: center;
    align-items: center;
    //margin-right: -4px;
  }

  &.reduction {
    background: #dc3b3b;

    img {
      transform: rotate(180deg);
    }

    .right {
      background: #e64545;
    }
  }

  &.growth {
    background: #499c38;

    .right {
      background: #53a642;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: white;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    &:after {
      opacity: 0.1;
    }
  }

  &:focus {
    outline: none;
    &:after {
      opacity: 0.2;
    }
  }
}
</style>
