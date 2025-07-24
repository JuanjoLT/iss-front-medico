<template>
  <div class="flex flex-col h-screen bg-[rgb(240,250,255)]">
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8 bg-[rgba(10,35,66,0.8)]" >
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="UOH logo" class="logo" src="@/assets/UOH.png" width="120" height="120" />
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6" >
        <RouterLink to="/Profile"
          ><img src="@/assets/user.png" class="logo" width="80" />
        </RouterLink>
        <RouterLink to="/ListingPage"
          ><img src="@/assets/list.png" class="logo" width="70" />
        </RouterLink>
        <RouterLink to="/"><img src="@/assets/home.png" class="logo" width="60" /></RouterLink>
      </nav>
    </header>
    <main class="flex-1 flex items-center justify-center py-6 bg-[rgb(230,230,230)]">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Lista de Pacientes</h2>
        <div class="w-6xl h-140 mx-auto space-y-6 overflow-y-auto">
          <router-link
            v-for="paciente in pacientesMock"
            :key="paciente.id"
            :to="`/PatientDetails`"

            class="flex justify-between items-center bg-white rounded-md px-4 py-3 mb-3 h-25 shadow cursor-pointer hover:bg-gray-100 transition">

            <div class="flex items-center space-x-3">
              <div
                class="w-4 h-4 rounded-full"
                :class="{
                  'bg-red-500': paciente.prioridad === 'Alta',
                  'bg-yellow-400': paciente.prioridad === 'Media',
                  'bg-green-500': paciente.prioridad === 'Baja'
                }"
              ></div>
              <h3 class="text-xl font-semibold text-gray-800">{{ paciente.nombre }} {{ paciente.apellido }}</h3>
            </div>

            <p class="text-sm text-gray-600 mt-1">Edad: {{ paciente.edad }}</p>
            <p class="text-sm text-gray-600">Diagnóstico: {{ paciente.enfermedad }}</p>
            <p class="text-sm text-gray-600">Dias Hospitalización: {{ paciente.diasHospitalizacion }}</p>
          </router-link>
        </div>

        <div class="flex justify-between mt-4 pt-5">
          <RouterLink to="/Home">
            <button class="bg-[#405F77] hover:bg-[#759AAB] text-white px-6 py-2 rounded-md cursor-pointer">Volver</button>
          </RouterLink>

          <RouterLink to="/NewPatient">
            <button class="bg-[#405F77] hover:bg-[#759AAB] text-white px-4 py-2 rounded-md text-sm shadow cursor-pointer">
              Nuevo Paciente
            </button>
        </RouterLink>
        </div>
      </div>
    </main>

    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-20 md:px-6 lg:px-8 bg-[#759AAB]">
      <p class="flex-1 text-sm text-end text-wrap font-mono">
        Cynthia Cortez <br />
        Eduardo Saez <br />
        Martín Sandoval <br />
        Felipe Scanda <br />
      </p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { pacientesMock } from '@/data/patients';
import { useRouter } from 'vue-router';

const router = useRouter();

function verDetalle(id: number) {
  router.push({ name: 'DetallePaciente', params: { id } });
}
</script>
