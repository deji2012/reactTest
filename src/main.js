import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";

const AsyncComp = defineAsyncComponent(() =>
  import("./components/AsyncComp.vue")
);
// 异步组件，适用于组件经常使用，并在多页面中被加载的场景。
// 可以在第一次加载组件时缓存，之后调用缓存；也可以在第一次加载的时候用占位符填充，再异步加载。
const app = createApp(App);
app.component("Async-comp", AsyncComp);
app.mount("#app");
