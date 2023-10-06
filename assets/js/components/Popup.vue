<template>
  <div class="grid-col-12">
    <div class="col-span-12 flex flex-row justify-center items-center my-2">
      <img
        src="./../../images/icon-128x128.png"
        class="h-12 w-auto rounded-lg"
        alt="logo"
      />
      <div class="flex flex-col items-start ml-2">
        <h1 class="text-gray-800 font-bold">CoverSurface v1.0</h1>
        <small class="text-gray-400 font-bold">Copyright - 2023</small>
      </div>
    </div>
    <div
      class="col-span-12 flex flex-row justify-center items-center gap-x-2 mb-2"
    >
      <span class="cursor-pointer rounded-md hover:bg-[#f9ceb2] p-1"
        ><img src="./../../images/Info_icon.svg" alt="info_icon"
      /></span>
      <span class="cursor-pointer rounded-md hover:bg-[#f9ceb2] p-1"
        ><img src="./../../images/On_button_icon.svg" alt="on_icon"
      /></span>
      <span class="cursor-pointer rounded-md hover:bg-[#f9ceb2] p-1"
        ><img src="./../../images/Setting_line.svg" alt="settings_icon"
      /></span>
    </div>
    <div
      class="col-span-12 flex flex-col justify-center items-center py-2 px-5 border-gray-400 border-y"
    >
      <div class="flex flex-row justify-between w-full mx-2">
        <p class="text-gray-400 font-bold">Nodes/Peers</p>
        <p class="text-gray-800 font-bold">576</p>
      </div>
      <div class="flex flex-row justify-between w-full mx-2">
        <p class="text-gray-400 font-bold">Gateway</p>
        <p class="text-gray-800 font-bold">localhost:3054</p>
      </div>
      <div class="flex flex-row justify-between w-full mx-2">
        <p class="text-gray-400 font-bold">API</p>
        <p class="text-gray-800 font-bold">127.0.0.1:1633</p>
      </div>
    </div>
    <div class="col-span-12 flex flex-col justify-center items-center py-2">
      <a @click="openDashboard" class="flex justify-center w-full">
        <button
          class="flex flex-row justify-evenly items-center w-3/5 mx-4 py-1 rounded-md bg-gray-100 hover:bg-[#f9ceb2]"
        >
          <img src="./../../images/surface_icon.svg" alt="surface_icon" />
          <h1 class="text-gray-800 font-bold">My Surface</h1>
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const atcive = ref<boolean>(true);
const theTitle = ref<string>("My little title");

const openDashboard = () => {
  console.log("hola");
  // Specify the URL to your dashboard HTML page

  const dashboardUrl = chrome.runtime.getURL("dashboard.html");

  // Use the chrome.tabs.create API to open a new tab with the specified URL
  chrome.tabs.create({ url: dashboardUrl });
};
</script>
