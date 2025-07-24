<script setup lang="ts">
import ButtonBase from '@/components/ButtonBase.vue';
import TextBox from '@/components/TextBox.vue';
import FooterBar from '@/components/FooterBar.vue';

function mostrarMensaje() {
  alert('Notificación enviada al administrador. Revise su correo asociado');
}
</script>

<template>
  <div class="flex flex-col h-screen bg-[rgb(240,250,255)]">
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8 bg-[rgba(10,35,66,0.8)]">
      <div>
        <img alt="UOH logo" class="logo" src="@/assets/UOH.png" width="120" height="120" />
      </div>
      <h2 class="text-2xl font-bold text-center text-blue-950"></h2>
    </header>

    <div class="flex flex-col h-screen bg-[rgb(230,230,230)]">
      <main class="flex-1 flex flex-col items-center justify-start text-blue-950 space-y-18">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl text-center mt-15">
          Proyecto de ingeniería de Software
        </h1>
        <div class="bg-white rounded-xl shadow-lg p-15 w-full max-w-xl">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">Login</h2>
          <div class="space-y-4">
            <TextBox label="Nombre de usuario o correo" />
            <TextBox label="Contraseña" :isPassword="true" />
            <a
              @click="mostrarMensaje"
              class="text-blue-900 hover:text-blue-700 cursor-pointer font-semibold text-center"
            >
              ¿Olvidaste tu contraseña?
            </a>
            <div class="flex justify-center mt-6">
              <RouterLink to="/Home">
                <ButtonBase label="Aceptar" />
              </RouterLink>
            </div>
          </div>
        </div>
      </main>
    </div>

    <FooterBar />
  </div>
</template>
