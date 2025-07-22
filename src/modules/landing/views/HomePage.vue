<template>
  <div class="flex flex-col h-screen bg-[rgba(230,247,255,1)]">
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="UOH logo" class="logo" src="@/assets/UOH.png" width="120" height="120" />
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink to="/LoginWorker"
          ><img src="@/assets/user.png" class="logo" width="80" />
        </RouterLink>
        <RouterLink to="/ListingPage"
          ><img src="@/assets/list.png" class="logo" width="70" />
        </RouterLink>
        <RouterLink to="/"><img src="@/assets/home.png" class="logo" width="60" /></RouterLink>
      </nav>
    </header>
    <main class="flex-1 flex items-center justify-center py-6">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
          Proyecto de ingeniería de Software
        </h1>
        <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">Monitoreo Pacientes</p>
      </div>
    </main>

    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-20 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-end text-wrap font-mono">
        Cynthia Cortez <br />
        Eduardo Saez <br />
        Martín Sandoval <br />
        Felipe Scanda <br />
      </p>
    </footer>
  </div>
</template>
