<template>
  <div>
    <h1>Saldos: ${{ store.saldo }}</h1>
    <button @click="store.Saldos('aumentar')">+100</button>
    <button @click="store.Saldos('disminuir')">-30</button>
  </div>
</template>

<script setup>
import store from "../store/store";
</script>

<style>
</style>