/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

// 底层的rullup配置
const rollupOptions = {
  // 不需要打包的文件
  external: ["vue", "vue-router"],
  output: {
    // 声明全局变量
    globals: {
      vue: "vue",
    },
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx({}), Unocss()],

  // 添加库配置模式
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      // 导出打包后的全局变量 import ThesisUI from "../../dist/thesis-ui.mjs"
      name: "ThesisUI",
      // 导出的文件名
      fileName: "thesis-ui",
      // 导出文件几种格式
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
