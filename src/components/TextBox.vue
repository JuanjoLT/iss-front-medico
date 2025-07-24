<!--Caja para ingresar texto-->

<!--Funciones ingreso string-->
<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  label: string;
  isPassword?: boolean;
}>();

const text = ref('');
const showPassword = ref(false);
</script>

<template>
  <div class="input-container">
    <input
      v-model="text"
      :type="isPassword ? (showPassword ? 'text' : 'password') : 'text'"
      class="input-field pr-10"
    />
    <label class="input-label" :class="{ 'label-raised': text !== '' }">{{ label }}</label>
    <span class="input-highlight"></span>

    <button
      v-if="isPassword"
      type="button"
      class="toggle-password"
      @click="showPassword = !showPassword"
    >
      <font-awesome-icon :icon="showPassword ? ['far', 'eye'] : ['far', 'eye-slash']" />
    </button>
  </div>
</template>

<!--Estilo  -->
<style scoped>
/* From Uiverse.io by Satwinder04 */
/* Input container, caja principal*/
.input-container {
  position: relative;
  width: 100%;
  padding-bottom: 2rem;
}

/* Input field, vista del texto ingresado */
.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  background-color: #f5f5f5;
}

/* Input label */
.input-label {
  position: absolute;
  top: 0;
  left: 8px;
  font-size: 20px;
  color: #666;
  pointer-events: none;
  transition: all 0.2s ease;
}

/* Input highlight, la barra animada al clicar */
.input-highlight {
  position: absolute;
  bottom: 32px;
  left: 5px;
  height: 2px;
  width: 0;
  background-color: #000000;
  transition: all 0.3s ease;
}

/* Input field:focus style*/
/* la animación de subir el contenido original del box arriba de este */
.input-field:focus + .input-label {
  top: -26px;
  left: 8px;
  font-size: 18px;
  color: #000000;
}

/* Mantiene la letra arriba */
.label-raised {
  top: -26px;
  font-size: 18px;
  color: #000000;
}

/*Expande la barrita animada*/
.input-field:focus + .input-label + .input-highlight {
  width: 96%;
}

/*Botón mostrar contraseña */
.toggle-password {
  position: absolute;
  right: 10px;
  top: 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}
</style>
