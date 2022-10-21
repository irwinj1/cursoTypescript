import { reactive } from "vue";
const store = reactive({
  saldo: 1000,
  Saldos(accion) {
    if (accion === "aumentar") {
      this.saldo += 100;
    } else if (accion === "disminuir") {
      this.saldo -= 30;
    }
  },
});

export default store;
