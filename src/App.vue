<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import AsyncComp from './components/AsyncComp.vue';
import md2html from './pages/markdown/md2html.vue';
import svgHtml from './pages/svg/index.vue';
</script>

<template>
    <!-- <md2html /> -->
    <svgHtml />
    <!-- <iframe src="http://localhost:3000/"></iframe> -->
</template>
<script setup>
</script>
<style lang="less" scoped>
iframe {
    flex: 1;
}
</style>
