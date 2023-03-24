// declare var require: any;
import demoBlockPlugin from "vitepress-theme-demoblock";
const sidebar = {
  "/": [
    {
      text: "快速开始",
      link: "/",
    },
    {
      text: "通用",
      items: [{ text: "Button 按钮", link: "/components/button/" }],
    },
    { text: "导航" },
    { text: "反馈" },
    { text: "数据录入" },
    { text: "数组展示" },
    { text: "布局" },
  ],
};
const config = {
  title: "🔨  Thesis-UI",
  description: "一个基于Vite的UI组件库",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin);
    },
  },
};

export default config;
