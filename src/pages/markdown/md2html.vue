<template>
    <div class="container"
         v-html="html">

    </div>
</template>
<script setup>
import { marked } from 'marked';
import { onMounted, ref } from 'vue';
import {getMd} from '@/api/url.js'
const html = ref('');
const rendererMD = new marked.Renderer();

marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

onMounted(async () => {
    // const res = await getMd('110SummerPalace.md');
    // console.log(res)
    // html.value = marked(res.data);
    fetch('src/assets/220commute.md')
        .then(response => response.text())
        .then((data) => {
            html.value = marked(data);
        });
});
</script>