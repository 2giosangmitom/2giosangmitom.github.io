export const useThemeStore = defineStore("theme", {
  state: () => ({ theme: "light" }),
  actions: {
    toggle() {
      this.theme = "dark";
    },
  },
});
