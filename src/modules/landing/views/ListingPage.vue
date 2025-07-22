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
            v-for="(patient, index) in patients"
            :key="index"
            :to="`/paciente/${patient.name}`"
            class="flex justify-between items-center bg-white rounded-md px-4 py-3 mb-3 h-25 shadow cursor-pointer hover:bg-gray-100 transition"
          >

            <div class="flex items-center space-x-3">
              <div
                class="w-4 h-4 rounded-full"
                :class="{
                  'bg-red-500': patient.severity === 'grave',
                  'bg-yellow-400': patient.severity === 'moderado',
                  'bg-green-500': patient.severity === 'leve'
                }"
              ></div>
              <h3 class="text-xl font-semibold text-gray-800">{{ patient.name }}</h3>
            </div>

            <p class="text-sm text-gray-600 mt-1">Edad: {{ patient.age }}</p>
            <p class="text-sm text-gray-600">Diagnóstico: {{ patient.diagnosis }}</p>
            <p class="text-sm text-gray-600">Teléfono: {{ patient.phone }}</p>
          </router-link>
        </div>

        <div class="flex justify-end mt-4 pt-5">
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

<script setup lang="ts">
interface Patient {
  name: string;
  age: number;
  diagnosis: string;
  phone: string;
  severity: string;
}

const patients: Patient[] = [
  { name: 'nombre', age: 22, diagnosis: 'enf', phone: '123-456-789', severity: 'grave' },
  { name: 'nombre', age: 22, diagnosis: 'enf', phone: '123-456-789', severity: 'grave' },
  { name: 'nombre', age: 22, diagnosis: 'enf', phone: '123-456-789', severity: 'moderado' },
  { name: 'nombre', age: 22, diagnosis: 'enf', phone: '123-456-789', severity: 'moderado' },
  { name: 'nombre', age: 22, diagnosis: 'enf', phone: '123-456-789', severity: 'leve' },
  { name: 'nombre', age: 22, diagnosis: 'enf', phone: '123-456-789', severity: 'leve' }
]
</script>
