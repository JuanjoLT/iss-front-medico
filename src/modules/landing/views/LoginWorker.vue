<template>
  <div class="flex flex-col h-screen bg-[rgb(240,250,255)]">
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8 bg-gradient-to-b from-[#2148C0] to-[#0F225A]" >
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="UOH logo" class="logo" src="@/assets/UOH.png" width="120" height="120" />
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6" >
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
        <div class="bg-[rgb(255,255,255)] p-10 rounded-xl shadow-md h-120 w-120 max-w-md">
            <h2 class="text-center text-2xl mb-8">
                Ingrese las credenciales dadas por su administrador
            </h2>

            <div class="mb-4 pt-6">
                <label class="block text-sm text-gray-700 mb-1 text-left pl-2">Usuario</label>
                <input
                type="text"
                placeholder="Ingrese RUT"
                class="w-full px-4 py-2 rounded-md bg-[rgba(235,235,235,0.5)] text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
            </div>

            <div class="mb-4">
                <label class="block text-sm text-gray-700 mb-1 text-left pl-2">Contraseña</label>
                <input
                type="password"
                placeholder="Ingrese contraseña"
                class="w-full px-4 py-2 rounded-md bg-[rgba(235,235,235,0.5)]  text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
            </div>

            <div class="text-center pt-8 text-xs text-gray-500 mb-6">
                En caso de olvidar su contraseña, contacte al administrador
            </div>

            <RouterLink to="/ListingPage">
              <button class="w-full bg-gradient-to-b from-[#2148C0] to-[#0F225A] text-white font-medium py-2 rounded-lg transition-colors cursor-pointer">
                  Ingresar
              </button>
            </RouterLink>
            
        </div>
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