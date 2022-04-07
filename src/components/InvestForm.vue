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
        title="Сумма инвестиции"
        name="sum"
        type="number"
        prefix="$"
        step="1"
        min="0"
        max="200000"
        v-model:input-value="sum"
      />
      <FormInput
        required
        title="Мультипликатор"
        name="multiplicator"
        type="number"
        prefix="&#10005;"
        step="1"
        min="1"
        max="99"
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
          min="0"
          title="Прибыль"
          :prefix="radioValue"
          show-switch
          v-model:input-value="income"
          v-model:checkbox-value="incomeEnabled"
        />
        <FormInput
          name="loss"
          type="number"
          min="0"
          title="Убыток"
          :prefix="radioValue"
          show-switch
          v-model:input-value="loss"
          v-model:checkbox-value="lossEnabled"
        />
      </div>

      <div :class="$style.buttons">
        <button type="submit" data-direction="reduction">В снижение</button>
        <button type="submit" data-direction="growth">В рост</button>
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
      limitsEnabled: false,
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
      } else {
        this.income = this.radioValue === "$" ? this.sum * 0.3 : 30;
      }
    },
    lossEnabled(newVal: boolean) {
      if (!newVal) {
        this.loss = "";
      } else {
        this.loss = this.radioValue === "$" ? this.sum * 0.3 : 30;
      }
    },
    limitsEnabled(newVal: boolean) {
      if (!newVal) {
        this.loss = "";
        this.income = "";
      }
    },
    radioValue(newVal: string) {
      if (this.incomeEnabled) {
        this.income = newVal === "$" ? this.sum * 0.3 : 30;
      }
      if (this.lossEnabled) {
        this.loss = newVal === "$" ? this.sum * 0.3 : 30;
      }
    },
  },
  methods: {
    submitForm(ev: any) {
      ev.preventDefault();

      const data = {
        sumInv: this.sum,
        mult: this.multiplicator,
        direction: ev.submitter.attributes["data-direction"]?.value,
      };

      if (this.income) {
        if (this.radioValue === "%") {
          data.takeProfit = this.sum * (this.income / 100);
        } else {
          data.takeProfit = this.income;
        }
      }

      if (this.loss) {
        if (this.radioValue === "%") {
          data.stopLoss = this.sum * (this.loss / 100);
        } else {
          data.stopLoss = this.loss;
        }
      }

      alert("Form successfully submitted!\n" + JSON.stringify(data, null, 2));
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
      margin-bottom: 8px;
      color: gray;

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
