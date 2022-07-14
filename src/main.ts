import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import { installI18n } from "@/i18n";
import { useCoreStore } from "@/stores/core";

loadFonts();

const app = createApp(App).use(router).use(vuetify).use(createPinia());
const i18n = installI18n(app);

app.mount("#app");

const coreStore = useCoreStore();

coreStore.$subscribe((_, state) => {
  i18n.global.locale = state.language;
});
