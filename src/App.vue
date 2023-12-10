<script setup lang="ts">
// import { SButton } from "./button";
const confirm = () => {
  console.log("confirm!!!!");
};
</script>

<template>
  <SButton size="large">button</SButton>
  <SButton disabled @click="confirm">123</SButton>
  <SButton size="small" type="text" @click="confirm">456</SButton>
  <SButton block>confirm</SButton>
  <SButton block type="primary">Cancel</SButton>
</template>

<style scoped lang="scss"></style>
