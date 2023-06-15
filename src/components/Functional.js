import { h } from "vue";
/**
 * @description: 函数式组件
 * @param {*} props
 * @param {*} context 相当于this
 * @return {*}
 */
export default function Functional(props, context) {
  return h(
    "div",
    context.attrs,
    h(
      "span",
      {
        onClick: () => alert([props.msg]),
      },
      props.msg
    )
  );
}
// 这里可以不设置props，但是会导致this里面有传进的值
Functional.props = ["msg"];
