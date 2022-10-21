<template>
  <div>
    <center>
      <h3>Valor: {{ count }}</h3>
      <Button @cambiar="aumentar" title="Aumentar" />
      <Button @cambiar="disminuir" title="Disminuir" />
      <h4>IVA (13%): {{ porcentaje }}%</h4>
    </center>
  </div>
</template>
<script setup>
import { useCounter } from "../composables/useCounter";
import Button from "./Button.vue";
import { defineProps } from "vue";

const props = defineProps({
  initialValue: Number,
});

const { count, aumentar, disminuir, porcentaje } = useCounter(
  props.initialValue
);
</script>