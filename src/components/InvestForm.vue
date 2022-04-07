<script setup lang="ts">
import FormInput from "./FormInput.vue";
</script>

<template>
  <form :class="$style.root" @submit="submitForm">
    <div :class="$style.header">
      <h3>Инвестировать сейчас</h3>
    </div>
    <hr />

    <div :class="$style.content">
      <FormInput
        required
        name="sum"
        type="number"
        title="Сумма инвестиции"
        v-model:input-value="sum"
      />
      <FormInput
        required
        name="multiplicator"
        type="number"
        title="Мультипликатор"
        v-model:input-value="multiplicator"
        :extra-text="`  = $ ${(sum * multiplicator).toLocaleString()}`"
      />

      <br />

      <div
        :class="{
          [$style.spoilerHead]: true,
          [$style.spoilerHeadDisabled]: !limitsEnabled,
        }"
        @click="toggleLimits"
      >
        <p>Ограничить прибыль и убыток</p>
        <br />
        <span :class="$style.icon">&dArr;</span>
      </div>

      <div :class="{ [$style.limitsDisabled]: !limitsEnabled }">
        <FormInput
          title="Ограничения в"
          :radio-values="radioOptions"
          v-model:radio-value="radioValue"
        />

        <FormInput
          name="income"
          type="number"
          title="Прибыль"
          show-switch
          v-model:input-value="income"
          v-model:checkbox-value="incomeEnabled"
        />
        <FormInput
          name="loss"
          type="number"
          title="Убыток"
          show-switch
          v-model:input-value="loss"
          v-model:checkbox-value="lossEnabled"
        />
      </div>

      <div :class="$style.buttons">
        <button type="submit">В снижение</button>
        <button type="submit">В рост</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  name: "InvestForm",
  data() {
    return {
      sum: 5000,
      multiplicator: 40,
      limitsEnabled: true,
      radioValue: "$",
      radioOptions: [
        { name: "units", value: "%" },
        { name: "units", value: "$" },
      ],
      income: "",
      incomeEnabled: false,
      loss: "",
      lossEnabled: false,
    };
  },
  watch: {
    incomeEnabled(newVal: boolean) {
      if (!newVal) {
        this.income = "";
      }
    },
    lossEnabled(newVal: boolean) {
      if (!newVal) {
        this.loss = "";
      }
    },
    limitsEnabled(newVal: boolean) {
      if (!newVal) {
        this.loss = "";
        this.income = "";
      }
    },
    radioValue(newVal: string) {
      console.log(newVal);
    },
  },
  methods: {
    submitForm(ev: Event) {
      ev.preventDefault();
      console.log(this.sum);
      alert("Form successfully submitted");
    },
    toggleLimits() {
      this.limitsEnabled = !this.limitsEnabled;
    },
  },
};
</script>

<style module lang="scss">
@import "../src/styles/variables";

.root {
  width: 350px;
  background: #fff;
  color: #000;

  //padding: 0 24px;

  .header {
    padding: 12px $xPadding;
  }

  .content {
    padding: 12px $xPadding;

    .spoilerHead {
      position: relative;

      &Disabled {
        .icon {
          transform: rotate(-90deg);
        }
      }

      &:hover {
        cursor: pointer;
      }

      .icon {
        height: 12px;
        position: absolute;
        top: 0;
        left: -1em;
      }
    }

    .limitsDisabled {
      visibility: hidden;
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      margin-top: 24px;

      & > *:first-child {
        margin-right: $centerGap;
      }

      button {
        width: 100%;
        height: 42px;
      }
    }
  }
}
</style>
