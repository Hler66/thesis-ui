# Button 按钮

## 基础用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式

```vue
<template>
  <div style="margin-bottom:10px;">
    <Button>普通按钮</Button>
    <Button color="red">红色按钮</Button>
    <Button color="green">绿色按钮</Button>
    <Button color="gray">灰色按钮</Button>
    <Button color="yellow">黄色按钮</Button>
  </div>
  <div>
    <Button>普通按钮</Button>
    <Button color="red" icon="search">红色按钮</Button>
    <Button color="green" icon="edit">绿色按钮</Button>
    <Button color="gray" icon="check">灰色按钮</Button>
    <Button color="yellow" icon="message">黄色按钮</Button>
    <Button color="green" icon="delete">绿色按钮</Button>
    <Button color="gray" icon="add">灰色按钮</Button>
    <Button color="yellow" icon="share">黄色按钮</Button>
  </div>
  <div>
    <Button color="blue" round plain icon="search">搜索按钮</Button>
    <Button color="green" round plain icon="edit">编辑按钮</Button>
    <Button color="gray" round plain icon="check">成功按钮</Button>
    <Button color="yellow" round plain icon="message">提示按钮</Button>
    <Button color="red" round plain icon="delete">删除按钮</Button>
  </div>
  <div>
    <Button size="small" plain>小按钮</Button>
    <Button size="medium" plain>中按钮</Button>
    <Button size="large" plain>大按钮</Button>
  </div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
  <div>
    <Button color="blue" round plain icon="search"></Button>
    <Button color="green" round plain icon="edit"></Button>
    <Button color="gray" round plain icon="check"></Button>
    <Button color="yellow" round plain icon="message"></Button>
    <Button color="red" round plain icon="delete"></Button>
  </div>
</template>
```

:::
