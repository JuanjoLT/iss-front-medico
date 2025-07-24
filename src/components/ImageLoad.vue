<!--Cargar imágenes-->
<script setup lang="ts">
import IconUpload from './icons/IconUpload.png';
</script>
<template>
  <label class="custum-file-upload">
    <div class="icon">
      <img :src="IconUpload" alt="icono de subida" class="custum-file-upload" />
    </div>
    <input type="file" />
  </label>
</template>

<!--Estilo -->
<style scoped>
/* From Uiverse.io by Yaya12085 */
.custum-file-upload {
  height: 150px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cacaca;
  background-color: rgba(255, 255, 255, 1);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px rgba(0, 0, 0, 0.1);
}

.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .icon svg {
  height: 80px;
  fill: rgba(75, 85, 99, 1);
}

.custum-file-upload input {
  display: none;
}
</style>
