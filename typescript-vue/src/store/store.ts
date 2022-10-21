import { reactive } from "vue";
import type { Store } from "../interfaces/Store";
const store = reactive<Store>({
  nombre: "Irwin",
  apellido: "Guardado",
  edad: 20,
  estudiante: false,
  crecer() {
    this.edad++;
  },
});

export default store;
