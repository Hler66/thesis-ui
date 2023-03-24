import { defineComponent, PropType } from "vue";
import "uno.css";

// 预定义按钮颜色
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

// 预设按钮大小
export type ISize = "small" | "medium" | "large";

//   vue子组件属性类型定义
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", //默认颜色
  },
  icon: {
    type: String,
    default: "",
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
};

export default defineComponent({
  name: "Button",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };

    return () => (
      <button
        class={`
          ${props.round ? "rounded-full" : "rounded-lg"}
          bg-${props.color}-${props.plain ? "100" : "500"}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props.plain ? props.color + "-500" : "white"}
          text-${size[props.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          my-1
          py-${size[props.size].y}
          px-${size[props.size].x}
        `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-2`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
