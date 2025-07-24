<script setup lang="ts">
import ButtonBase from '@/components/ButtonBase.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';
</script>

<template>
  <div class="flex flex-col h-screen bg-[rgb(230,230,230)]">
    <HeaderBar />
    <main
      class="flex-1 flex flex-col items-center justify-center text-blue-950 space-y-6 min-h-[90vh]"
    >
      <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl text-center">¡Bienvenido/a!</h1>

      <div class="bg-white rounded-xl shadow-lg p-4 w-full max-w-xl mt-8">
        <h2 class="text-2xl font-bold text-center text-blue-950 mb-10">Página principal</h2>
        <div class="w-full flex flex-col items-center space-y-10 pb-8">
          <RouterLink to="/Profile" class="w-full max-w-sm">
            <ButtonBase label="Información médico" class="w-full" />
          </RouterLink>
          <RouterLink to="/ListingPage" class="w-full max-w-sm">
            <ButtonBase label="Listado pacientes" class="w-full" />
          </RouterLink>
          <RouterLink to="/" class="w-full max-w-sm">
            <ButtonBase label="Volver a página inicial" class="w-full" />
          </RouterLink>
          <RouterLink to="/LoginWorker" class="w-full max-w-sm">
            <ButtonBase label="Cerrar sesión" class="w-full" />
          </RouterLink>
        </div>
      </div>
    </main>

    <FooterBar />
  </div>
</template>
