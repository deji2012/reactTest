<template>
    <div id="container" style="height:600px">
    </div>
</template>
<script setup>
import { Graph } from "@antv/x6";
import { onMounted } from "vue";
import Count from "./Count.vue";
import "@antv/x6-vue-shape";
let graph = {}
onMounted(() => {
  const container = document.getElementById("container");
  graph = new Graph({
    container: container,
    grid: true,
    width: 600,
    height: 400,
  });
  Graph.registerNode("my-count", {
    inherit: "vue-shape",
    x: 200,
    y: 150,
    width: 150,
    height: 100,
    component: {
      template: `<Count />`,
      components: {
        Count,
      },
    },
  });
  graph.addNode({
    id: "1",
    shape: "my-count",
    x: 400,
    y: 150,
    width: 150,
    height: 100,
    data: {
      num: 0,
    },
  });
})

</script>