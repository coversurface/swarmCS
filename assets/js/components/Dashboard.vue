<template>
  <div class="grid-col-12">
    <div class="col-span-12">
      <h1 class="border border-red-500">My little dashboard</h1>
      <h1 class="border border-green-500">{{ mytitle_1 }}</h1>
      <h1 class="border border-blue-500">{{ mytitle_2 }}</h1>
      <h1 class="border border-blue-500">{{ mytitle_3 }}</h1>
      <h1 class="border border-blue-500">{{ mytitle_4 }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mytitle_1 = ref<string>("My little dashboard");
const mytitle_2 = ref<string>("Hola!");
const mytitle_3 = ref<string>("Kolbas!");
const mytitle_4 = ref<string>("Attempt!!");
</script>
