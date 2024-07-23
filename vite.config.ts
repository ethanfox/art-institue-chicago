import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import path from "node:path";

//https://vitejs.dev/config/
export default defineConfig({
  base: "/art-institute-chicago/",
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
