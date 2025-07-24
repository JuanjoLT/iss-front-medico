<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const query = ref('');
    const sanitizedQuery = ref('');
    const patientData = ref<string[]>([]);

    const Nombre_Paciente = ref('');
    const Apellido_Paciente = ref('');
    const Edad_Paciente = ref('');
    const Sexo_Paciente = ref('');
    const Enfermedad_Paciente = ref('');
    const Dias_Hospitalizacion_Paciente = ref('');
    const Descripcion_Paciente = ref('');
    const Prioridad_Paciente = ref('');
    const Notas_Paciente = ref('');

    function sanitizeQuery(query: string): string {
      let cleaned = query.split(';')[0];
      cleaned = cleaned.replace(/[=<>!&|{}()\[\]\\'"~`]/g, '');
      return cleaned.trim();
    }

    function api_query(sanitized: string): string[] {
      // solo pa testeo, esto debería ser lo que se conecta a backend
      return [
        'Juan',
        'Pérez',
        '32',
        'Masculino',
        'Gripe',
        '5',
        'Sin complicaciones',
        'Media',
        'Requiere control en 3 días',
      ];
    }

    function processQuery() {
      sanitizedQuery.value = sanitizeQuery(query.value);
      patientData.value = api_query(sanitizedQuery.value);

      // Assign to individual fields
      Nombre_Paciente.value = patientData.value[0];
      Apellido_Paciente.value = patientData.value[1];
      Edad_Paciente.value = patientData.value[2];
      Sexo_Paciente.value = patientData.value[3];
      Enfermedad_Paciente.value = patientData.value[4];
      Dias_Hospitalizacion_Paciente.value = patientData.value[5];
      Descripcion_Paciente.value = patientData.value[6];
      Prioridad_Paciente.value = patientData.value[7];
      Notas_Paciente.value = patientData.value[8];
    }

    return {
      query,
      sanitizedQuery,
      Nombre_Paciente,
      Apellido_Paciente,
      Edad_Paciente,
      Sexo_Paciente,
      Enfermedad_Paciente,
      Dias_Hospitalizacion_Paciente,
      Descripcion_Paciente,
      Prioridad_Paciente,
      Notas_Paciente,
      processQuery,
    };
  },
});
</script>

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
        <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Ficha Paciente</h2>

        <div class="bg-[rgb(255,255,255)] rounded-lg pt-6 px-8 h-155 w-200 shadow-md">
            <div class="grid grid-cols-3 gap-4 mb-6 ">
                <div class="col-span-1 flex flex-col items-center justify-center border border-gray-300 rounded-md p-4">
                    <span class="text-gray-600">Foto user</span>
                </div>

                <div class="col-span-2 grid grid-cols-1 gap-4">
                    <div class="text-left">
                        <label class="text-sm text-gray-700 pl-2">Nombre Paciente</label>
                        <input value="Nombre" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled/>
                    </div>
                    <div class="text-left">
                        <label class="text-sm text-gray-700 pl-2">Apellido Paciente</label>
                        <input value="Apellido" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled/>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-6 ">
                <div class="text-left">
                    <label class="text-sm text-gray-700 pl-2">Edad</label>
                    <input value="Edad" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled/>
                </div>
                <div class="text-left">
                    <label class="text-sm text-gray-700 pl-2">Género</label>
                    <input value="Género" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled/>
                </div>
                <div class="text-left">
                    <label class="text-sm text-gray-700 pl-2">Enfermedad</label>
                    <input value="Enfermedad" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled/>
                </div>
                <div class="text-left">
                    <label class="text-sm text-gray-700 pl-2">Días de Hospitalización</label>
                    <input value="Dias" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled/>
                </div>
                <div class="text-left">
                    <label class="text-sm text-gray-700 pl-2">Descripción</label>
                    <input value="Descripcion" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled/>
                </div>
                <div class="text-left">
                    <label class="text-sm text-gray-700 pl-2">Prioridad</label>
                    <input value="Prioridad" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled/>
                </div>
            </div>

            <input
                value="Notas"
                class="w-full p-3 border border-gray-300 rounded-md resize-none bg-gray-200 mb-6"
                rows="2"
                disabled
            ></input>

            <div class="flex justify-between">
                <RouterLink to="/ListingPage">
                    <button class="bg-[#405F77] hover:bg-[#759AAB] text-white px-6 py-2 rounded-md cursor-pointer">Cancelar</button>
                </RouterLink>
                <RouterLink to="/Daily">
                    <button class="bg-[#405F77] hover:bg-[#759AAB] text-white px-6 py-2 rounded-md cursor-pointer">Informe diario</button>
                </RouterLink>
                
                
            </div>
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
