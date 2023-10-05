<template>
  <div class="wrapper">
    <h1 class="title">Hello World Notes</h1>
    <div class="buttons">
      <button type="button" class="px-2 py-1 bg-green-300">Btn1</button>
      <button type="button" class="state-on">Btn1</button>
    </div>
    <div class="sites">
      <p class="border border-red-500">{{ theTitle }}</p>
      <textarea
        rows="8"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
      ></textarea>
    </div>
    <button type="button" class="state-save">Example Submit Button</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const atcive = ref<boolean>(true);
const theTitle = ref<string>("My little title");
</script>
