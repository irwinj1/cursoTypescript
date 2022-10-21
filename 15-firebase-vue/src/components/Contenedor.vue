<template>
  <div class="row">
    <div class="col s12 l3">
      <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <span class="card-title">Card Title</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information.
            </p>
          </div>
          <div class="card-action">
            <a
              class="waves-effect waves-light btn margen amber darken-2"
              title="Editar"
            >
              <i class="material-icons"> edit </i>
            </a>

            <a
              class="waves-effect waves-light btn margen red darken-2"
              title="Eliminar"
            >
              <i class="material-icons">delete</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
<style scoped>
.margen {
  margin: 3px;
}
</style>