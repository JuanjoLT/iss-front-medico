<template>
  <div class="min-h-screen bg-gradient-to-b from-[#2148C0] to-[#0F225A] flex flex-col items-center ">
    <div class=" w-full text-center py-6 rounded-b text-white text-4xl font-semibold mb-2 mt-8 ">
      Cambio de Contraseña
    </div>

    <div class="bg-white rounded-xl shadow-md p-8 w-full max-w-md space-y-6 mt-6">
      <div v-for="(field, index) in passwordFields" :key="index">
        <label class="block mb-4 font-semibold text-white bg-[#2148C0]  px-3 py-1 rounded-xl shadow w-50 text-center">
          {{ field.label }}
        </label>
        <div class="relative">
          <input
            :type="field.visible ? 'text' : 'password'"
            :placeholder="field.placeholder"
            v-model="field.model"
            class="w-full px-4 py-2 rounded shadow focus:outline-none"
          />
          <button
            type="button"
            class="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            @click="toggleVisibility(index)"
          >
            👁️
          </button>
        </div>
      </div>

      <div class="text-right">
        <button
          @click="handleSubmit"
          class="bg-[#2148C0] text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const passwordFields = reactive([
  {
    label: 'Contraseña Actual',
    placeholder: 'Ingrese su contraseña actual',
    model: '',
    visible: false,
  },
  {
    label: 'Nueva Contraseña',
    placeholder: 'Ingrese su nueva contraseña',
    model: '',
    visible: false,
  },
  {
    label: 'Confirmar Contraseña',
    placeholder: 'Confirme su nueva contraseña',
    model: '',
    visible: false,
  },
])

const toggleVisibility = (index) => {
  passwordFields[index].visible = !passwordFields[index].visible
}

const handleSubmit = () => {
  const [actual, nueva, confirmar] = passwordFields.map(f => f.model)

  if (!actual || !nueva || !confirmar) {
    alert('Por favor complete todos los campos.')
    return
  }

  if (nueva !== confirmar) {
    alert('La nueva contraseña y la confirmación no coinciden.')
    return
  }

  // Simulación de envío:
  console.log('Contraseña actual:', actual)
  console.log('Nueva contraseña:', nueva)
  alert('Contraseña cambiada exitosamente (simulado).')
}
</script>