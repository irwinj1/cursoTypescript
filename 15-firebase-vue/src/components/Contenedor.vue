<template>
  <div class="row">
    <div class="col s12 l3">
      <CardProject :projects="projects" />
    </div>
  </div>
</template>
  
  <script>
import CardProject from "./CardProject.vue";
export default {
  data: () => ({
    projects: [],
  }),
  components: { CardProject },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const res = await fetch(
        "https://crud-vue-27f66-default-rtdb.firebaseio.com/projects.json"
      );
      const data = await res.json();

      this.projects.push(data);
      console.log(this.projects);
    },
  },
};
</script>
  
<style scoped>
</style>