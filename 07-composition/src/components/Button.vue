<template>
  <button @click="emit('cambiar')">{{ title }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
});
const emit = defineEmits(["cambiar"]);
</script>
<style>
</style>