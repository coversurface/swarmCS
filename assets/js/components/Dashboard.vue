<template>
  <div class="grid-col-12">
    <div class="col-span-12">
      <h1 class="border border-red-500">{{ mytitle }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mytitle = ref<string>("My little dashboard");
</script>
