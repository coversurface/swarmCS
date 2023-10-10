<template>
  <div id="login" class="flex flex-row justify-center items-center">
    <div class="flex flex-col justify-between items-center gap-y-12">
      <div class="flex flex-row justify-center items-end gap-2">
        <h1 class="text-gray-800 text-4xl">Login into</h1>
        <h1 class="text-orange-400 text-5xl">Swarm</h1>
      </div>
      <div class="flex flex-col justify-center items-center gap-y-8">
        <div class="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Username"
            class="bg-transparent py-1 pl-2 w-80 outline-none border-b"
          />
        </div>
        <div class="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Username"
            class="bg-transparent py-1 pl-2 w-80 outline-none border-b"
          />
        </div>
        <button
          class="bg-orange-400 h-8 w-80 text-white rounded hover:bg-orange-500"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#login {
  background: url("images/login.svg") no-repeat 50% 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
