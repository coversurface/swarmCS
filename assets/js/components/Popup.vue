<template>
  <div class="wrapper">
    <h1 class="title">Hello World Notes</h1>
    <div class="buttons">
      <button type="button" class="state-off">Btn1</button>
      <button type="button" class="state-on">Btn1</button>
    </div>
    <div class="sites">
      <p>My little notes</p>
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

<script lang="js">
export default {
  data() {
    return {
      atcive: true,
    };
  },
};
</script>
