// 导出全部组件，实现vue插件，
import { App } from "vue";
import Button from "./Button";

// 导出单独的组件
export { Button };

// 插件中编写install方法，将所有组件安装vue实例,权量安装
export default {
  install(app: App): void {
    app.component(Button.name, Button);
    // app.component(JsxButton.name, JsxButton);
  },
};
