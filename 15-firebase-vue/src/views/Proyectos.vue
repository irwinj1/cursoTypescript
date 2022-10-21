<template>
  <div class="containers">
    <h1>vista procontaineryectos</h1>
    <Contenedor />
  </div>
</template>

<script>
import Contenedor from "@/components/Contenedor.vue";
export default { name: "proyectos", components: { Contenedor } };
</script>

<style scoped>
.containers {
  width: 90vw;
  margin: auto;
}
</style>
