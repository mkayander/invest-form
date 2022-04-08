<script setup lang="ts">
import FormInput from "./FormInput.vue";
import SendButton from "./SendButton.vue";
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
        :errors="errors['sum']"
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
        :errors="errors['multiplicator']"
        :extra-text="` = $ ${(sum * multiplicator).toLocaleString()}`"
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
        <img :class="$style.icon" src="@/assets/arr.png" alt="expand" />
      </div>

      <div :class="{ [$style.limitsDisabled]: !limitsEnabled }">
        <FormInput
          required
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
          show-arrows
          :errors="errors['income']"
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
          show-arrows
          :errors="errors['loss']"
          v-model:input-value="loss"
          v-model:checkbox-value="lossEnabled"
        />
      </div>

      <div :class="$style.buttons">
        <SendButton direction="reduction">В снижение</SendButton>
        <SendButton direction="growth">В рост</SendButton>
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
      errors: {},
    };
  },
  watch: {
    limitsEnabled(newVal: boolean) {
      if (!newVal) {
        this.loss = "";
        this.income = "";
        this.incomeEnabled = false;
        this.lossEnabled = false;
      }
    },
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
    getLimitsValue(value: number) {
      if (this.radioValue === "%") {
        return this.sum * (value / 100);
      }

      return value;
    },
    validateItem(isInvalid: boolean, name: string, message: string) {
      if (isInvalid) {
        this.errors[name] = this.errors[name]
          ? this.errors[name].push(message)
          : [message];
      }
    },
    validateForm() {
      this.errors = {};

      this.validateItem(
        this.sum < 100,
        "sum",
        "Минимальная сумма инвестиции $ 100"
      );

      this.validateItem(
        this.multiplicator < 1 || this.multiplicator > 40,
        "multiplicator",
        "Неверное значение мультипликатора"
      );

      if (this.income !== "") {
        this.validateItem(
          this.sum / this.getLimitsValue(this.income) > 10,
          "income",
          this.radioValue === "%"
            ? "Не может быть меньше 10%"
            : `Не может быть меньше $ ${(this.sum * 0.1).toLocaleString()}`
        );
      }

      if (this.loss !== "") {
        this.validateItem(
          this.sum / this.getLimitsValue(this.loss) > 10,
          "loss",
          this.radioValue === "%"
            ? "Не может быть меньше 10%"
            : `Не может быть меньше $ ${(this.sum * 0.1).toLocaleString()}`
        );

        this.validateItem(
          this.getLimitsValue(this.loss) > this.sum,
          "loss",
          this.radioValue === "%"
            ? "Не может быть больше 100%"
            : `Не может быть больше $ ${this.sum.toLocaleString()}`
        );
      }

      if (Object.keys(this.errors).length > 0) {
        throw new Error(
          "Form validation failed!\n" + JSON.stringify(this.errors, null, 2)
        );
      }
    },
    submitForm(ev: any) {
      ev.preventDefault();

      try {
        this.validateForm();
      } catch (e) {
        console.error(e);
        return;
      }

      const data = {
        sumInv: this.sum,
        mult: this.multiplicator,
        direction: ev.submitter.attributes["data-direction"]?.value,
      };

      if (this.income) data.takeProfit = this.getLimitsValue(this.income);
      if (this.loss) data.stopLoss = this.getLimitsValue(this.loss);

      setTimeout(() => {
        alert("Form successfully submitted!\n" + JSON.stringify(data, null, 2));
      }, 200);
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
  width: 316px;
  background: #fff;
  color: #000;

  font-size: 13px;

  //padding: 0 24px;

  .header {
    padding: 12px $rPadding 12px $lPadding;
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }

  .content {
    padding: 12px $rPadding 12px $lPadding;

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
        //display: inline;
        //height: 12px;
        position: absolute;
        top: 2px;
        left: -1em;
        //font-size: 0.5rem;
        //font-weight: 900;
        //transform: rotate(180deg);
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
    }
  }
}
</style>
