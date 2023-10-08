<template>
  <div
    class="flex flex-col justify-between items-start h-full absolute bg-gray-50 border-r border-gray-300"
    :class="sideBarSwtich === true ? 'w-48' : 'w-20'"
  >
    <div class="flex flex-col justify-start items-start w-full">
      <div class="flex flex-row justify-start items-center p-5 gap-x-4">
        <img
          src="images/User_icon.svg"
          class="h-10 w-auto p-2 rounded-full cursor-pointer bg-gray-200 border border-gray-300"
        />
        <div
          class="flex flex-col justify-start items-start"
          v-show="sideBarSwtich"
        >
          <h1 class="text-gray-800 font-bold">{{ profileName }}</h1>
          <small class="text-gray-400 font-bold">{{ profileEmail }}</small>
        </div>
      </div>
      <hr class="w-full text-gray-300" />
      <div class="flex flex-col justify-start items-start p-5 gap-4">
        <small
          class="text-gray-400 font-bold uppercase -mt-3 -ml-3"
          :class="sideBarSwtich === true ? 'visible' : 'invisible'"
          >{{ sectionOverview }}</small
        >

        <div
          class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
        >
          <img
            src="images/dashboard_icon.svg"
            class="h-10 w-auto p-2 cs-gray"
          />
          <h1 class="font-medium mr-4" v-show="sideBarSwtich">
            {{ menuDashboard }}
          </h1>
        </div>

        <div
          class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
        >
          <img src="images/services_icon.svg" class="h-10 w-auto p-2 cs-gray" />
          <h1 class="font-medium mr-4" v-show="sideBarSwtich">
            {{ menuServices }}
          </h1>
        </div>

        <div
          class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
        >
          <img src="images/messages_icon.svg" class="h-10 w-auto p-2 cs-gray" />
          <h1 class="font-medium mr-4" v-show="sideBarSwtich">
            {{ menuNotifications }}
          </h1>
        </div>

        <div
          class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
        >
          <img
            src="images/event_log_icon.svg"
            class="h-10 w-auto p-2 cs-gray"
          />
          <h1 class="font-medium mr-4" v-show="sideBarSwtich">
            {{ menuEventlog }}
          </h1>
        </div>
      </div>
      <hr class="w-full text-gray-300" />
    </div>
    <div class="flex flex-col justify-end items-start w-full">
      <div class="flex flex-col justify-start items-start p-5 gap-4">
        <small
          class="text-gray-400 font-bold uppercase -mt-3 -ml-3"
          :class="sideBarSwtich === true ? 'visible' : 'invisible'"
          >{{ sectionAccount }}</small
        >
        <div
          class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
        >
          <img src="images/chat_icon.svg" class="h-10 w-auto p-2 cs-gray" />
          <h1 class="font-medium mr-4" v-show="sideBarSwtich">
            {{ menuChat }}
          </h1>
        </div>

        <div
          class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
        >
          <img src="images/settings_icon.svg" class="h-10 w-auto p-2 cs-gray" />
          <h1 class="font-medium mr-4" v-show="sideBarSwtich">
            {{ menuSettings }}
          </h1>
        </div>

        <div
          class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
        >
          <img src="images/login_icon.svg" class="h-10 w-auto p-2 cs-gray" />
          <h1 class="font-medium mr-4" v-show="sideBarSwtich">
            {{ menuLogin }}
          </h1>
        </div>

        <div
          @click="sideBar"
          class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
        >
          <img src="images/switch_icon.svg" class="h-10 w-auto p-2 cs-gray" />
        </div>
      </div>
      <hr class="w-full text-gray-300" />

      <div class="flex flex-row justify-start items-center p-5 gap-x-4">
        <img
          src="images/3d_box_fill.svg"
          class="h-10 w-auto rounded-lg cursor-pointer bg-gray-200 border border-gray-300"
        />
        <div
          class="flex flex-col justify-start items-start"
          v-show="sideBarSwtich"
        >
          <h1 class="text-gray-800 font-bold">{{ brandName }}</h1>
          <small class="text-gray-400 font-bold">{{ brandCopyright }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const profileName = ref<string>("John Doe");
const profileEmail = ref<string>("john.doe@mail.com");

const sectionOverview = ref<string>("Overview");
const menuDashboard = ref<string>("Dashboard");
const menuServices = ref<string>("Services");
const menuNotifications = ref<string>("Notifications");
const menuEventlog = ref<string>("Eventlog");

const sectionAccount = ref<string>("Account");
const menuChat = ref<string>("Chat");
const menuSettings = ref<string>("Settings");
const menuLogin = ref<string>("Login");
const brandName = ref<string>("CoverSurface v1");
const brandCopyright = ref<string>("Copyright - 2023");

const sideBarSwtich = ref<boolean>(false);
const sideBar = () => {
  sideBarSwtich.value = !sideBarSwtich.value;
};
</script>
