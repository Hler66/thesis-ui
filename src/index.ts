// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-browser";
import ThesisUI from "./entry";

createApp({
  template: `
    <h1>按钮组件</h1>
    <div style="margin-bottom:20px;">
        <Button>普通按钮</Button>
        <Button color="red">红色按钮</Button>
        <Button color="green">绿色按钮</Button>
        <Button color="gray">灰色按钮</Button>
        <Button color="yellow">黄色按钮</Button>
    </div>
    <div style="margin-bottom:20px;">
        <Button>普通按钮</Button>
        <Button color="red" icon="search">红色按钮</Button>
        <Button color="green" icon="edit">绿色按钮</Button>
        <Button color="gray" icon="check">灰色按钮</Button>
        <Button color="yellow" icon="message">黄色按钮</Button>
        <Button color="green" icon="delete">绿色按钮</Button>
        <Button color="gray" icon="add">灰色按钮</Button>
        <Button color="yellow" icon="share">黄色按钮</Button>
    </div>
    <div style="margin-bottom:20px;">
       <Button color="blue" round plain icon="search">搜索按钮</Button>
       <Button color="green" round plain icon="edit">编辑按钮</Button>
       <Button color="gray" round plain icon="check">成功按钮</Button>
       <Button color="yellow" round plain icon="message">提示按钮</Button>
       <Button color="red" round plain icon="delete">删除按钮</Button>
   </div>
   <div style="margin-bottom:20px;">
       <Button size="small" plain>小按钮</Button>
       <Button size="medium" plain>中按钮</Button>
       <Button size="large" plain>大按钮</Button>
   </div>
   <div>
         <Button color="blue" round plain icon="search" ></Button>
         <Button color="green" round plain icon="edit" ></Button>
         <Button color="gray" round plain icon="check" ></Button>
         <Button color="yellow" round plain icon="message" ></Button>
         <Button color="red" round plain icon="delete" ></Button>
     </div>
    `,
})
  .use(ThesisUI)
  .mount("#app");
