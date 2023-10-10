<template>
  <div class="flex flex-row items-start justify-start h-full">
    <div
      class="flex flex-col justify-between items-start h-full bg-gray-50 border-r border-gray-300"
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
            @click="changeComponent(1)"
            class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800 relative"
          >
            <img
              src="images/dashboard_icon.svg"
              class="h-10 w-auto p-2 cs-gray"
            />
            <h1 class="font-medium mr-4" v-show="sideBarSwtich">
              {{ menuDashboard }}
            </h1>
          </div>
          <div class="flex flex-col justify-start items-start">
            <div
              @click="changeComponent(2)"
              class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800 relative"
            >
              <img
                @click="subServices"
                :src="
                  subServicesSwtich === true
                    ? 'images/Expand_down.svg'
                    : 'images/Expand_right.svg'
                "
                class="h-10 w-auto p-2 cs-gray absolute -ml-7 cursor-pointer"
                :class="sideBarSwtich === true ? 'visible' : 'invisible'"
              />
              <img
                src="images/services_icon.svg"
                class="h-10 w-auto p-2 cs-gray"
              />
              <h1 class="font-medium mr-4" v-show="sideBarSwtich">
                {{ menuServices }}
              </h1>
            </div>
            <ul v-show="sideBarSwtich && subServicesSwtich">
              <li
                @click="changeComponent(8)"
                class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
              >
                <img src="images/dot_icon.svg" class="h-8 w-auto p-1 cs-gray" />
                <h1 class="font-medium mr-4">{{ subMenu_1 }}</h1>
              </li>
              <li
                @click="changeComponent(9)"
                class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
              >
                <img src="images/dot_icon.svg" class="h-8 w-auto p-1 cs-gray" />
                <h1 class="font-medium mr-4">{{ subMenu_2 }}</h1>
              </li>
            </ul>
          </div>
          <div
            @click="changeComponent(3)"
            class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800 relative"
          >
            <img
              src="images/messages_icon.svg"
              class="h-10 w-auto p-2 cs-gray"
            />
            <h1 class="font-medium mr-4" v-show="sideBarSwtich">
              {{ menuNotifications }}
            </h1>
          </div>
          <div
            @click="changeComponent(4)"
            class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800 relative"
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
            @click="changeComponent(5)"
            class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
          >
            <img src="images/chat_icon.svg" class="h-10 w-auto p-2 cs-gray" />
            <h1 class="font-medium mr-4" v-show="sideBarSwtich">
              {{ menuChat }}
            </h1>
          </div>
          <div
            @click="changeComponent(6)"
            class="flex flex-row justify-start items-center rounded-lg cs-hover cursor-pointer hover:bg-orange-200 text-gray-800"
          >
            <img
              src="images/settings_icon.svg"
              class="h-10 w-auto p-2 cs-gray"
            />
            <h1 class="font-medium mr-4" v-show="sideBarSwtich">
              {{ menuSettings }}
            </h1>
          </div>
          <div
            @click="changeComponent(7)"
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
    <transition name="fade" mode="out-in">
      <component :is="currentComponent"></component>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MainDashboard from "./pages/MainDashboard.vue";
import MainServices from "./pages/MainServices.vue";
import MainNotifications from "./pages/MainNotifications.vue";
import MainEvent from "./pages/MainEvent.vue";
import MainChat from "./pages/MainChat.vue";
import MainSettings from "./pages/MainSettings.vue";
import MainLogin from "./pages/MainLogin.vue";

import ServiceCoverSurface from "./pages/subServices/ServiceCoverSurface.vue";
import ServiceDaccounting from "./pages/subServices/ServiceDaccounting.vue";

const profileName = ref<string>("John Doe");
const profileEmail = ref<string>("john.doe@mail.com");

const sectionOverview = ref<string>("Overview");
const menuDashboard = ref<string>("Dashboard");
const menuServices = ref<string>("Services");

const subMenu_1 = ref<string>("CoverSurface");
const subMenu_2 = ref<string>("Đaccounting");

const menuNotifications = ref<string>("Notifications");
const menuEventlog = ref<string>("Eventlog");

const sectionAccount = ref<string>("Account");
const menuChat = ref<string>("Chat");
const menuSettings = ref<string>("Settings");
const menuLogin = ref<string>("Login");
const brandName = ref<string>("CoverSurface");
const brandCopyright = ref<string>("Copyright - 2023");

const currentComponent = ref(MainNotifications);
const changeComponent = (page: number) => {
  switch (page) {
    case 1:
      currentComponent.value = MainDashboard;
      break;
    case 2:
      currentComponent.value = MainServices;
      break;
    case 3:
      currentComponent.value = MainNotifications;
      break;
    case 4:
      currentComponent.value = MainEvent;
      break;
    case 5:
      currentComponent.value = MainChat;
      break;
    case 6:
      currentComponent.value = MainSettings;
      break;
    case 7:
      currentComponent.value = MainLogin;
      break;
    case 8:
      currentComponent.value = ServiceCoverSurface;
      break;
    case 9:
      currentComponent.value = ServiceDaccounting;
      break;
    default:
      currentComponent.value = MainDashboard;
  }
};

const sideBarSwtich = ref<boolean>(true);
const sideBar = () => {
  sideBarSwtich.value = !sideBarSwtich.value;
};

const subServicesSwtich = ref<boolean>(false);
const subServices = () => {
  subServicesSwtich.value = !subServicesSwtich.value;
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
