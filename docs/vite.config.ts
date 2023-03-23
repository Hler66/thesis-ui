import { defineConfig } from "vite";
import VueJsx from "@vitejs/plugin-vue-jsx";

import Unocss from "../config/unocss";

export default defineConfig({
  plugins: [VueJsx(), Unocss()],
});
