<p align="center">
<img src="https://github.com/smarty-team/smarty-admin/blob/main/assets/logo.jpeg" />
</p>

<h1 align="center">Thesis-UI</h1>

<p align="center">
一个基于Vite + Vue3 的组件库Demo✨🎉🎊🎃🎄
</p>


## Features

- 🎑基于Vue框架
- 🎨支持JSX与Vue单文件组件
- 🎁Vue3 plugins实现单元测试
- 🎀Eslint + Prettier + Husky 语法检查
- 🎗Vitepress + Vercel 文档网站搭建
- 👑基于Action CI 实现持续集成与交付

## Install 
```bash
npm install thesis-ui
```
## Quick Start
```ts
import { createApp } from "vue";
import ThesisUI from "thesis-ui";

createApp({
  template: `
    <div style="margin-bottom:20px;">
        <Button>普通按钮</Button>
        <Button color="red">红色按钮</Button>
        <Button color="green">绿色按钮</Button>
        <Button color="gray">灰色按钮</Button>
        <Button color="yellow">黄色按钮</Button>
    </div>
    `,
})
  .use(ThesisUI)
  .mount("#app");
```
