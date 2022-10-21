<template>
  <div class="card horizontal">
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title">{{ projects?.name }}</span>
        <p>
          {{ projects?.description }}
        </p>
        <p>Tecologías: {{ projects?.langs }}</p>
      </div>
      <div class="card-action">
        <router-link
          to="reg-projects"
          class="waves-effect waves-light btn margen amber darken-2"
          title="Editar"
        >
          <i class="material-icons"> edit </i></router-link
        >

        <a
          class="waves-effect waves-light btn margen red darken-2"
          title="Eliminar"
        >
          <i class="material-icons">delete</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projects"],
};
</script>
<style scoped>
.margen {
  margin: 3px;
}
</style>