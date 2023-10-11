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
            id="search"
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
            class="h-8 w-auto p-1 cs-orange cursor-pointer cs-hovering"
          />
          <img
            src="images/fluent_video-16-regular.svg"
            class="h-8 w-auto p-1 cs-orange cursor-pointer cs-hovering"
          />
          <img
            src="images/bi_three-dots-vertical.svg"
            class="h-8 w-auto p-1 cs-orange cursor-pointer cs-hovering"
          />
        </div>
      </div>

      <div
        class="flex flex-col justify-between items-center gap-4 h-full w-full"
      >
        <div class="mr-auto pl-4">
          <h1 class="rounded-full ml-4 py-2 px-4 bg-gray-200 w-fit text-sm">
            Hey There!
          </h1>
          <div class="flex flex-row items-center gap-1">
            <span class="h-4 w-4 bg-gray-200 rounded-full"></span>
            <small class="text-gray-400 hover:text-gray-600 pt-1"
              >Today at 8:29 PM</small
            >
          </div>
        </div>

        <div class="mr-auto pl-4">
          <h1 class="rounded-full ml-4 py-2 px-4 bg-gray-200 w-fit text-sm">
            How are you?
          </h1>
          <div class="flex flex-row items-center gap-1">
            <span class="h-4 w-4 bg-gray-200 rounded-full"></span>
            <small class="text-gray-400 hover:text-gray-600 pt-1"
              >Today at 8:29 PM</small
            >
          </div>
        </div>

        <div class="ml-auto pr-4">
          <h1 class="rounded-full mr-4 py-2 px-4 bg-orange-200 w-fit text-sm">
            Hello!
          </h1>
          <div class="flex flex-row justify-end items-center gap-1">
            <small class="text-gray-400 hover:text-gray-600 pt-1"
              >Today at 8:29 PM</small
            >
            <span class="h-4 w-4 bg-orange-200 rounded-full"></span>
          </div>
        </div>

        <div class="ml-auto pr-4">
          <h1 class="rounded-full mr-4 py-2 px-4 bg-orange-200 w-fit text-sm">
            I am fine and how are you?
          </h1>
          <div class="flex flex-row justify-end items-center gap-1">
            <small class="text-gray-400 hover:text-gray-600 pt-1"
              >Today at 8:29 PM</small
            >
            <span class="h-4 w-4 bg-orange-200 rounded-full"></span>
          </div>
        </div>

        <div class="mr-auto pl-4">
          <h1 class="rounded-full ml-4 py-2 px-4 bg-gray-200 w-fit text-sm">
            I am doing well, Can we meet tomorrow?
          </h1>
          <div class="flex flex-row justify-start items-center gap-1">
            <span class="h-4 w-4 bg-gray-200 rounded-full"></span>
            <small class="text-gray-400 hover:text-gray-600 pt-1"
              >Today at 8:29 PM</small
            >
          </div>
        </div>

        <div class="ml-auto pr-4">
          <h1 class="rounded-full mr-4 py-2 px-4 bg-orange-200 w-fit text-sm">
            Yes Sure!
          </h1>
          <div class="flex flex-row justify-end items-center gap-1">
            <small class="text-gray-400 hover:text-gray-600 pt-1"
              >Today at 8:29 PM</small
            >
            <span class="h-4 w-4 bg-orange-200 rounded-full"></span>
          </div>
        </div>
      </div>
      <div
        class="flex flex-row justify-between items-center w-full my-4 px-8 gap-y-8"
      >
        <div
          class="flex flex-row justify-between items-center relative h-full w-full"
        >
          <img
            src="images/Vector.svg"
            class="cursor-pointer absolute h-6 z-0 left-3 cs-gray cs-hovering"
          />
          <input
            id="msg"
            type="text"
            value="Type your message here.."
            class="py-1 pl-12 rounded-full w-full h-full bg-orange-50 border outline-1 outline-orange-100 placeholder-slate-300 mr-4"
          />
          <img
            src="images/fluent_emoji-laugh-16-regular.svg"
            class="cursor-pointer absolute h-6 z-0 right-14 cs-gray cs-hovering text-lg"
          />
          <img
            src="images/fluent_camera-24-regular.svg"
            class="cursor-pointer absolute h-6 z-0 right-6 cs-gray cs-hovering"
          />
        </div>
        <div
          class="flex flex-col justify-center items-center p-1 rounded bg-orange-400 hover:bg-orange-500"
        >
          <img
            src="images/Send_fill.svg"
            class="h-8 w-auto cs-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#msg {
  font-size: 16px;
  color: gray;
}
</style>
