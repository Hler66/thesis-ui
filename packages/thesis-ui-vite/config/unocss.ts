import Unocss from "unocss/vite";
import { presetAttributify, presetIcons, presetUno } from "unocss";
const colors = [
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
// 自定义图标
const icons = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",
  "share",
];
const textSize = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"];

const py = [...Array(16)].fill(0);
py[0] = 1;
for (let i = 1; i < py.length; i++) {
  py[i] = py[i - 1] + 0.5;
}

// Unocss是按需引入的
const safelist = [
  ...[...Array(16)].fill(0).map((_, i) => `px-${i + 1}`),
  ...py.map((v) => `py-${v}`),
  ...[...Array(16)].fill(0).map((_, i) => `mx-${i + 0.5}`),
  ...[...Array(16)].fill(0).map((_, i) => `my-${i + 0.5}`),
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:text-${v}-500`),
  "text-white",
  ...textSize.map((v) => `text-${v}`),
  ...["rounded-full", "rounded-lg"],
  ...icons.map((v) => `i-ic-baseline-${v}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
