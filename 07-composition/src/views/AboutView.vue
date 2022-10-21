<template>
  <div>
    <h1>componentes</h1>
    <hr />
    <counter :initialValue="100" />
  </div>
</template>

<script setup>
import Counter from "../components/Counter.vue";
</script>
