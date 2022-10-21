<template>
  <div>
    <h1>Refs</h1>
    <hr />
    <form>
      <div>
        <label>
          Tecnologías:
          <input type="number" min="1" max="5" v-model="formulario.numero" />
        </label>
      </div>
      <div v-for="numero in formulario.numero" :key="numero">
        <Inputs :numero="numero" :formulario="formulario" />
      </div>
    </form>
    <h3>{{ formulario.nombre }} - {{ formulario.nivel }}</h3>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Inputs from "../components/Inputs.vue";

const formulario = reactive({
  nombre: [],
  nivel: [],
  numero: 1,
});
// const nombre = ref("Vue.js");
// const nivel = ref("");

//Compositions API
// export default {
//   setup() {
//     const msg = "Composition API";

//     return { msg };
//   },
// };

//Options API
// export default{
//   data:()=>({})
// }
</script>
