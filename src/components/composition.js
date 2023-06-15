import {h, reactive} from 'vue'
export default{
    setup(props,context){
        let data = reactive({
            count:0
        })
        const increment = () => {
            data.count++
        }
        return ()=>h('div',{
            onClick: increment
        },'composition',data.count)
    }
}