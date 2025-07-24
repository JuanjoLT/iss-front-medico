<template>
  <div class="flex flex-col bg-[rgba(10,35,66,0.8)]">
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="UOH logo" class="logo" src="@/assets/UOH.png" width="120" height="120" />
        </a>
      </div>
      <h2 class="text-2xl font-bold text-center text-blue-950"></h2>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink to="/Profile"
          ><img src="@/assets/user.png" class="logo" width="80" />
        </RouterLink>
        <RouterLink to="/ListingPage"
          ><img src="@/assets/list.png" class="logo" width="70" />
        </RouterLink>
        <RouterLink to="/Home"><img src="@/assets/home.png" class="logo" width="60" /></RouterLink>
      </nav>
    </header>
  </div>
</template>
