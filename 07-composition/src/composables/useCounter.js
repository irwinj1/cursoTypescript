import { ref, computed } from "vue";

export const useCounter = (initialValue) => {
  const count = ref(initialValue);
  const aumentar = () => {
    count.value++;
  };

  const disminuir = () => {
    count.value--;
  };
  const porcentaje = computed(() => count.value * 0.13);
  return {
    count,
    aumentar,
    disminuir,
    porcentaje,
  };
};
