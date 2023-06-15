<template>
  <el-button @click="add()">内部Add: {{ num }} </el-button>
</template>
<script>
export default {
  name: "dropDown",
};
</script>
<script setup>
import { ref, inject, onMounted } from "vue";
inject(["getGraph", "getNode"]);
const num = 0;
// const options = [
//   {
//     value: "Option1",
//     label: "Option1",
//   },
//   {
//     value: "Option2",
//     label: "Option2",
//   },
//   {
//     value: "Option3",
//     label: "Option3",
//   },
//   {
//     value: "Option4",
//     label: "Option4",
//   },
//   {
//     value: "Option5",
//     label: "Option5",
//   },
// ];
const add = () => {
  const node = this.getNode();
  const { num } = node.getData();
  node.setData({
    num: num + 1,
  });
};
onMounted(() => {
  const self = this;
  const node = this.getNode();
  // 监听数据改变事件
  node.on("change:data", ({ current }) => {
    self.num = current.num;
  });
});
</script>
