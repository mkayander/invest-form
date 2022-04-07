<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <!--    <div class="wrapper">-->
    <!--      &lt;!&ndash;      <HelloWorld msg="You did it!" />&ndash;&gt;-->

    <!--      <nav>-->
    <!--        <RouterLink to="/">Home</RouterLink>-->
    <!--        <RouterLink to="/about">About</RouterLink>-->
    <!--      </nav>-->
    <!--    </div>-->
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "src/assets/base";

html {
  background: #181818;
  color: #fff;
}

header {
  display: flex;
  justify-content: center;
}
</style>
