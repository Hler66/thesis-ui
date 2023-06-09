import { defineComponent, createVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
    //默认颜色
  },
  icon: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    default: "medium"
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  }
};
const Button = /* @__PURE__ */ defineComponent({
  name: "Button",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
          ${props2.round ? "rounded-full" : "rounded-lg"}
          bg-${props2.color}-${props2.plain ? "100" : "500"}
          hover:bg-${props2.color}-400
          border-${props2.color}-${props2.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props2.plain ? props2.color + "-500" : "white"}
          text-${size[props2.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          my-1
          py-${size[props2.size].y}
          px-${size[props2.size].x}
        `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-2`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const entry = {
  install(app) {
    app.component(Button.name, Button);
  }
};
export {
  Button,
  entry as default
};
//# sourceMappingURL=thesis-ui.mjs.map
