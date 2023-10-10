<template>
  <div class="flex flex-row items-center justify-between w-full">
    <div
      class="flex flex-col items-start justify-start mx-16 my-8 mb-0 w-[30%]"
    >
      <div class="w-full">
        <div class="mb-4">
          <h1 class="text-gray-800 text-xl font-bold">Chat</h1>
          <b class="text-gray-300 text-sm">1 message, 1 unread</b>
        </div>
        <div class="flex ml-1 -mr-1 mb-8">
          <img src="images/Search.svg" class="cursor-pointer z-0 -mr-7" />
          <input
            type="text"
            value="Search"
            class="bg-gray-100 py-1 pl-8 rounded w-full"
          />
          <img src="images/Close_round.svg" class="cursor-pointer z-0 -ml-7" />
        </div>
      </div>
      <div class="overflow-y-scroll h-[80vh] border-y hide-scrollbar">
        <div
          class="flex flex-row justify-start items-center relative hover:cursor-pointer border-2 border-transparent bg-white border-orange-400"
        >
          <div
            class="flex flex-row justify-start border-gray-400 p-2 w-full gap-2"
          >
            <img
              src="images/User_icon.svg"
              class="h-10 w-auto p-2 m-2 rounded-full cursor-pointer bg-gray-200"
            />
            <div class="flex flex-col justify-center items-center gap-4 mb-4">
              <div class="flex flex-col justify-center items-start w-full">
                <div class="flex flex-row justify-between items-center w-full">
                  <h1 class="text-gray-600 text-lg font-normal">
                    CoverSurfaceBot
                  </h1>
                  <p class="text-gray-400 text-md mx-4">8:48 AM</p>
                </div>
                <div class="flex flex-row justify-end items-center w-full">
                  <img
                    src="images/dot_icon.svg"
                    class="h-10 w-auto p-1 cs-light"
                  />
                </div>
              </div>
              <p class="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                cupiditate at quia atque! Aliquam magni et corrupti ad ducimus.
                Consequatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-between gap-4 w-[60%] h-screen border-l"
    >
      <div class="flex flex-row justify-between items-center w-full border-b">
        <div class="flex flex-row justify-start p-2 w-full gap-2">
          <img
            src="images/User_icon.svg"
            class="h-10 w-auto p-2 m-2 rounded-full cursor-pointer bg-gray-200"
          />
          <div class="flex flex-col justify-center items-start w-full">
            <div class="flex flex-row justify-between items-center w-full">
              <h1 class="text-gray-800 text-base font-normal">
                CoverSurfaceBot
              </h1>
            </div>
            <p class="text-gray-400">Online - Last seen at 02:20 PM</p>
          </div>
        </div>

        <div class="flex flex-row justify-around items-center mx-4">
          <img
            src="images/ci_phone-outline.svg"
            class="h-8 w-auto p-1 cs-orange cursor-pointer"
          />
          <img
            src="images/fluent_video-16-regular.svg"
            class="h-8 w-auto p-1 cs-orange cursor-pointer"
          />
          <img
            src="images/bi_three-dots-vertical.svg"
            class="h-8 w-auto p-1 cs-orange cursor-pointer"
          />
        </div>
      </div>

      <div class="">msg</div>
      <div class="flex flex-row justify-around items-center mx-4">
        <img
          src="images/Send_fill.svg"
          class="h-8 w-auto p-1 cs-orange cursor-pointer"
        />
        <img
          src="images/fluent_camera-24-regular.svg"
          class="h-8 w-auto p-1 cs-orange cursor-pointer"
        />
        <img
          src="images/fluent_emoji-laugh-16-regular.svg"
          class="h-8 w-auto p-1 cs-orange cursor-pointer"
        />
        <img
          src="images/fluent_video-16-regular.svg"
          class="h-8 w-auto p-1 cs-orange cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
