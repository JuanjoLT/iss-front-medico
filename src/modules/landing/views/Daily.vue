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
        <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Registro diario</h2>

        <div class="bg-[rgb(255,255,255)] rounded-lg pt-6 px-8 h-155 w-200 shadow-md">
            <div class="gap-4 mb-6 ">
               <div class="text-left pt-4">
                    <label class="text-sm text-gray-700 pl-2">Sintomas</label>
                    <p value="Texto sintomas" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm h-30">{{ sintoma }}</p> <!-- Verlo bien con backend -->
                </div>
            </div>

            <div class="flex justify-between pt-80">
                <RouterLink to="/PatientDetails">
                    <button class="bg-[#405F77] hover:bg-[#759AAB] text-white px-6 py-2 rounded-md cursor-pointer">Volver</button>
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

<script setup lang="ts">
import { pacientesMock } from '@/data/patients';
import { useRouter } from 'vue-router';

const sintoma = pacientesMock[0].notas

</script>