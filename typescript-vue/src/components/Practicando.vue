<template>
  <div>
    <h1>nombre: {{ store.nombre }} {{ store.apellido }}</h1>
    <h2>Edad: {{ store.edad }}</h2>
    <button @click="store.crecer">Crecer</button>
  </div>
</template>

<script lang="ts" setup>
import type { Persona } from "@/interfaces/Persona";
//import { defineComponent, ref } from "vue";
import store from "../store/store";

// const Practicando = defineComponent({
//   name: "Practicando",
//   // setup() {
//   //   // const nombre = ref("Irwin");
//   //   // nombre.value = "Jose";
//   //   // const persona = ref<Persona>({
//   //   //   nombre: "Irwin",
//   //   //   apellido: "Guardado",
//   //   //   edad: 20,
//   //   //   estudiante: true,
//   //   //   crecer() {
//   //   //     this.edad++;
//   //   //   },
//   //   // });
//   //   // return { persona };
//   //   return store;
//   // },
// });
// export default Practicando;
</script>
