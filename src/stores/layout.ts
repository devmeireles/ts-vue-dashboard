import { defineStore } from "pinia";

export const useLayoutStore = defineStore({
  id: "layout",
  state: () => ({
    isOpenSidebar: false,
    theme: "light",
    language: "english",
  }),
  getters: {
    sidebarState: (state) => state.isOpenSidebar,
    currentTheme: (state) => state.theme,
    currentLanguage: (state) => state.language,
  },
  actions: {
    toggleSidebar() {
      this.isOpenSidebar = !this.isOpenSidebar;
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
    toggleLanguage() {
      this.language = this.language === "english" ? "portuguse" : "english";
    },
  },
});
