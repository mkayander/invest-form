<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    name?: string;
    required?: boolean;
    showSwitch?: boolean;
    inputValue?: string | number | boolean;
    checkboxValue?: boolean;
    radioValue?: string;
    radioValues?: { name: string; value: string }[];
    type?: HTMLInputElement["type"];
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
      <input
        :class="$style.input"
        :required="required"
        :type="type"
        :title="name"
        :name="name"
        :value="inputValue"
        v-if="!radioValues"
        :disabled="!checkboxValue"
        @input="$emit('update:inputValue', $event.target.value)"
      />
      <span v-if="extraText">
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
          required
          type="radio"
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
  padding: 4px 0;

  .toggle {
    margin-right: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  & > span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    //flex-grow: 0;
    //max-width: 100%/2;
    width: 50%;
    //margin-right: $centerGap;
  }

  & > span:first-child {
    margin-right: $centerGap;
  }

  //width: 100%;

  .input {
    border-radius: 3px;
    height: 24px;
    width: 100%;

    border: 1px rgba(0, 0, 0, 0.3) solid;
  }

  .radio {
    display: inline-flex;
    margin-right: 6px;
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
