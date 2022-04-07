<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    name?: string;
    required?: boolean;
    showSwitch?: boolean;
    step?: string;
    min?: string;
    max?: string;
    inputValue?: string | number | boolean;
    checkboxValue?: boolean;
    radioValue?: string;
    radioValues?: { name: string; value: string }[];
    type?: HTMLInputElement["type"];
    prefix?: string;
    extraText?: string;
  }>(),
  {
    checkboxValue: true,
  }
);

defineEmits(["update:inputValue", "update:checkboxValue", "update:radioValue"]);
</script>

<template>
  <div :class="$style.root">
    <span>
      <input
        :class="$style.toggle"
        v-if="showSwitch"
        type="checkbox"
        :checked="checkboxValue"
        @change="$emit('update:checkboxValue', $event.target.checked)"
      />
      {{ title }}
    </span>

    <span v-if="!radioValues">
      <span v-if="prefix" :class="$style.prefix">
        {{ prefix }}
      </span>
      <input
        v-if="!radioValues"
        :class="{ [$style.input]: true, [$style.withExtra]: extraText }"
        :required="required"
        :type="type"
        :title="title"
        :name="name"
        :value="inputValue"
        :disabled="!checkboxValue"
        :step="step"
        :min="min"
        :max="max"
        @change="$emit('update:inputValue', $event.target.value)"
      />
      <span v-if="extraText" :class="$style.extra" :title="extraText">
        {{ extraText }}
      </span>
    </span>

    <span v-if="radioValues">
      <label
        :class="$style.radio"
        v-for="option in radioValues"
        :key="option.name"
      >
        <input
          type="radio"
          :required="required"
          :name="option.name"
          :value="option.value"
          :checked="option.value === radioValue"
          @change="$emit('update:radioValue', option.value)"
        />
        <span>{{ option.value }}</span>
      </label>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormInput",
};
</script>

<style module lang="scss">
@import "../src/styles/variables";

.root {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 38px;
  padding: 4px 0;

  .toggle {
    margin-right: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  & > span {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    //flex-grow: 0;
    //max-width: 100%/2;
    width: calc(50% - ($centerGap / 2));
    //min-width: 50%;
    //white-space: pre;
    //margin-right: $centerGap;
  }

  & > span:first-child {
    margin-right: $centerGap;
  }

  //width: 100%;

  .input {
    //position: relative;
    border-radius: 3px;
    height: 24px;
    max-width: 100%;
    min-width: 10px;
    width: 100%;
    //flex-grow: 1;

    text-align: right;

    border: 1px rgba(0, 0, 0, 0.3) solid;

    &.withExtra {
      width: 60px;
    }
  }

  .prefix {
    position: absolute;
    left: 8px;
    font-size: 0.8rem;
    color: gray;
  }

  .extra {
    display: inline-block;
    max-width: calc(100% - 50px);
    color: gray;
    white-space: pre;
    overflow: hidden;

    text-overflow: ellipsis;

    flex-grow: 1;
  }

  .radio {
    display: inline-flex;
    margin-right: 12px;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    input {
      margin-right: 6px;
    }
  }
}
</style>
