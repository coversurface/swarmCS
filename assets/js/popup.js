import { createApp } from "vue"; // Import createApp from Vue 3
import Popup from "./components/Popup.vue";

// Create a new Vue 3 app instance and mount it to an element with the ID "app"
const app = createApp(Popup);
app.mount("#app");
