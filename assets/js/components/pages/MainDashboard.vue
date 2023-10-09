<template>
  <div class="flex flex-col h-full items-center justify-between w-full">
    <div class="flex flex-row justify-center items-center w-full gap-8 m-8">
      <div
        class="bg-gray-100 border border-gray-200 flex flex-col max-w-xs shadow-md p-4 rounded w-full"
      >
        <h1 class="text-gray-400 font-bold">Active & connected peers</h1>
        <p class="text-orange-400 font-bold text-xl ml-auto">1,424</p>
      </div>

      <div
        class="bg-gray-100 border border-gray-200 flex flex-col max-w-xs shadow-md p-4 rounded w-full"
      >
        <h1 class="text-gray-400 font-bold">Population (in sum)</h1>
        <p class="text-orange-400 font-bold text-xl ml-auto">232,352</p>
      </div>

      <div
        class="bg-gray-100 border border-gray-200 flex flex-col max-w-xs shadow-md p-4 rounded w-full"
      >
        <h1 class="text-gray-400 font-bold">Node status</h1>
        <p class="text-orange-400 font-bold text-xl ml-auto">connected</p>
      </div>

      <div
        class="bg-gray-100 border border-gray-200 flex flex-col max-w-xs shadow-md p-4 rounded w-full"
      >
        <h1 class="text-gray-400 font-bold">MetaMask connection</h1>
        <p class="text-orange-400 font-bold text-xl ml-auto">connected</p>
      </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center my-8">
      <svgMap class="w-[70%] justify-center" />
    </div>
  </div>
</template>

<script setup lang="ts">
import svgMap from "./../partials/svgMap.vue";
</script>
