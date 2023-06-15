<template>
    <div>
        <div @click="increment" ref="a">
            composition:{{ data.count }}
        </div>
    </div>
    <div>count:{{ count }}</div>
</template>
<script>
import { isReactive, readonly, isReadonly, onMounted, reactive, ref, toRefs, computed, effect, watch } from 'vue'
export default {
    setup(props, context) {
        // reactive与readonly
        let data = reactive({
            count: 0
        })
        const fixed = readonly({
            edition: 3
        })
        const readonlyData = isReadonly(fixed)
        const reactiveData = isReactive(data)

        // ref定义变量
        // const f = ref(2)
        // console.log(f.value, 'f')

        const increment = () => {
            data.count++
        }

        // setup执行一次后就不再执行
        // const f = data.count

        // toRefs 用于获取目标的键值对
        const { count } = toRefs(data)
        // console.log(count,'count')

        // effect 在响应式数据有变化时执行，默认页面初始化时执行一次 
        effect(() => {
            // console.log(data.count)
        })

        // watch
        // watch(,)

        const cumputedVal = computed(
            // 用法1： 常规用法
            // () => {
            //     return count.value + data.count
            // }

            // 用法2： get、set
            {}
        )
        // ref获取dom元素
        const a = ref(null)
        onMounted(() => {
            console.log(a.value, '创建节点时可用')
        })

        return { data, increment, fixed, a, count, cumputedVal }
    }
}
</script>