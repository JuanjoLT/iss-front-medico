<!--Botón, componente -->

<!--Función para cambiar inscripción en el botón -->
<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<!--Principal -->
<template>
  <button @click="$emit('click')" class="custom-button">
    {{ label }}
  </button>
</template>

<!--Estilo botón -->
<style scoped>
.custom-button {
  width: 100%;
  max-width: 400px;
  min-width: 200px;
  height: 45px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #405f77;
  transition: all 0.2s ease-in-out 0ms;
  user-select: none;
  font-family: 'Poppins', sans-serif;
  color: white;
  margin: 0 auto;
}

.custom-button:hover {
  background-color: #0f225a;
}

.custom-button:active {
  transform: scale(0.95);
}
</style>
