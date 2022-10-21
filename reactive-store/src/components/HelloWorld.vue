<script setup>
import { ref, reactive } from "vue";
const name = ref("Irwin");
const persona = reactive({
  nombre: "Irwin",
  apellido: "Guardado",
  edad: 20,
});
</script>

<template>
  <div>
    <h1>Hola {{ persona.nombre }} {{ persona.apellido }}</h1>
    <h2>tu edad es: {{ persona.edad }}</h2>
    <input type="text" v-model="name" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
