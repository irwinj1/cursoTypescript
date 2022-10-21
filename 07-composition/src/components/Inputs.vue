<template>
  <div>
    <label>Tecnología #{{ numero }}: </label>
    <input type="text" v-model="formulario.nombre[numero - 1]" />
    <select v-model="formulario.nivel[numero - 1]" name="nivel">
      <option value="" disabled>Seleciona un nivel</option>
      <option>Basico</option>
      <option>Intermedio</option>
      <option>Avanzado</option>
    </select>
  </div>
</template>
<script setup>
import { defineProps, onUnmounted } from "vue";
const { numero, formulario } = defineProps(["numero", "formulario"]);
onUnmounted(() => {
  formulario.nombre.pop(numero - 1);
  formulario.nivel.pop(numero - 1);
});
</script>