<template>
    <div>
        <nav class="px-2 bg-white border-gray-200  text-text-rgba">
            <div class="container flex flex-wrap items-center justify-around mx-auto">
              <a class="flex items-center cursor-pointer" @click="showMainPage">
                  <img :src="`${logo}`" class="h-6 mr-3 sm:h-10" alt="Nakitte Logo" />
                  <span class="self-center text-xl font-semibold whitespace-nowrap  text-dark-rgba">Nakitte</span>
              </a>
              <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
              <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 rounded text-dark-green-rgba md:dark:hover:bg-transparent" @click="showMainPage">Anasayfa</a>
                  </li>
                  <li>
                      <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between py-2 pl-3 pr-4  rounded text-dark-green-rgba" >Projeler <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                      <!-- Dropdown menu -->
                      <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="showProjectCard">Projelerimiz</a>
                            </li>
                            
                          </ul>

                      </div>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 rounded text-dark-green-rgba md:dark:hover:bg-transparent">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 rounded text-dark-green-rgba md:dark:hover:bg-transparent">Blog</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 rounded text-dark-green-rgba md:dark:hover:bg-transparent">İletişim</a>
                  </li>
                
                </ul>
              </div>
              <div class="">

                  <button class="m-1 bg-green-rgba  text-white hover:text-green-rgba hover:bg-white border hover:border-green-rgba font-bold py-2 px-8 rounded-full">
                    Giriş Yap
                  </button>
                  <button class="m-1 bg-transparent text-green-rgba font-semibold hover:text-white py-2 px-8 border border-green-rgba hover:bg-green-rgba rounded-full">
                    Üye Ol
                  </button>
              </div>
            </div>
          </nav>
    </div>
</template>

<script setup>
import logo from '../../public/Assets/yenilogo.png'
import { useRouter } from "vue-router";

const router = useRouter();
const showProjectCard = () => {
  return router.push(`/projects`);
};
const showMainPage = () => {
  return router.push(`/`);
};
</script>


<style scoped>
*{
    font-family: 'Roboto', sans-serif;
}
</style>