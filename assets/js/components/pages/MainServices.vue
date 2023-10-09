<template>
  <div class="grid grid-cols-12 w-full overflow-y-scroll h-full">
    <!-- Header -->
    <div class="col-span-12 border-b h-[81px] top-0 sticky bg-white z-10">
      <div class="flex justify-center items-center relative h-full">
        <div class="absolute flex top-8 left-8">
          <h1>Results for</h1>
          <b class="ml-2">accounting</b>
        </div>
        <div class="flex relative">
          <img src="images/Search.svg" class="cursor-pointer z-0 -mr-7" />
          <input
            type="text"
            value="accounting"
            class="bg-gray-100 py-1 pl-8 rounded w-80"
          />
          <img src="images/Close_round.svg" class="cursor-pointer z-0 -ml-7" />
        </div>
      </div>
    </div>

    <div class="col-span-12 m-16">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-between items-center gap-12">
          <div
            class="flex flex-row justify-between items-center gap-16 bg-orange-200 p-2 rounded-lg"
          >
            <div class="flex flex-row justify-between items-center gap-2">
              <img
                src="images/Widget_add.svg"
                class="cursor-pointer h-4 w-auto"
              />
              <h1>All</h1>
            </div>
            <h1>160</h1>
          </div>
          <div class="flex flex-row justify-start items-center gap-10">
            <div class="flex flex-row justify-between items-center gap-2">
              <h1>All products</h1>
              <img
                src="images/Expand_down.svg"
                class="cursor-pointer h-4 w-auto"
              />
            </div>
            <div class="flex flex-row justify-between items-center gap-2">
              <h1>Paid + free</h1>
              <img
                src="images/Expand_down.svg"
                class="cursor-pointer h-4 w-auto"
              />
            </div>
            <div class="flex flex-row justify-between items-center gap-2">
              <h1>All surfaces</h1>
              <img
                src="images/Expand_down.svg"
                class="cursor-pointer h-4 w-auto"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center gap-2">
          <h1>Relevancy</h1>
          <img src="images/Expand_down.svg" class="cursor-pointer h-4 w-auto" />
        </div>
      </div>
    </div>

    <div class="col-span-12 mx-16 mb-16">
      <div class="grid grid-cols-12 gap-8">
        <div
          class="col-span-3 border rounded flex flex-col justify-start items-center relative hover:cursor-pointer hover:border-gray-300 bg-gray-100 shadow"
          v-for="(item, index) in 20"
          :key="index"
        >
          <div class="h-40 w-full">
            <img src="images/Bag.svg" class="h-24 w-full my-8" />
          </div>
          <div class="flex flex-row justify-start p-2 border-t w-full gap-2">
            <img
              src="images/User_icon.svg"
              class="h-10 w-auto p-2 m-2 rounded-full cursor-pointer bg-gray-200"
            />
            <div class="flex flex-col justify-center items-start w-full">
              <div class="flex flex-row justify-between items-center w-full">
                <h1 class="text-gray-800 font-bold">Daccounting service</h1>
                <p class="text-gray-400 mx-4">3.9k</p>
              </div>
              <p class="text-gray-400">John Doe Inc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
