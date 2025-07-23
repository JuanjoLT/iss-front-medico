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
        <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Información de usuario</h2>

        <div class="bg-[rgb(255,255,255)] rounded-lg p-8 h-150 w-full max-w-8xl shadow-md">
            <div class="grid grid-cols-3 gap-4 mb-6 py-10">
                <div class="col-span-1 flex flex-col items-center justify-center border border-gray-300 rounded-md p-4 bg-gray-200">
                    <span class="text-gray-600">Foto user</span>
                </div>

                <div class="col-span-2 grid grid-cols-2 gap-4">
                    <div class="text-left">
                        <label class="text-sm text-gray-700 pl-2">Nombre</label>
                        <input type="text" value="Juan García" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled />
                    </div>
                    <div class="text-left">
                        <label class="text-sm text-gray-700 pl-2">Edad</label>
                        <input type="text" value="40" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled />
                    </div>
                    <div class="text-left">
                        <label class="text-sm text-gray-700 pl-2">Rut</label>
                        <input type="text" value="11.111.111-1" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled />
                    </div>
                    <div class="text-left">
                        <label class="text-sm text-gray-700 pl-2">Cargo</label>
                        <input type="text" value="Médico general" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled />
                    </div>
                </div>
            </div>

            <div class="mb-4 text-left">
                <label class="text-sm text-gray-700 pl-2">Correo</label>
                <input type="email" value="correo.ejemplo@dominio.cl" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled />
            </div>

            <div class="mb-6 text-left">
                <label class="text-sm text-gray-700 pl-2">Contraseña</label>
                <input type="text" value="123456" class="w-full bg-gray-200 rounded-md px-3 py-3 text-sm" disabled />
            </div>

            <div class="flex justify-between pt-18">
                <RouterLink to="/ListingPage">
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