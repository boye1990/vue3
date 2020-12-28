import { ref } from 'vue';
import axios from 'axios';

function useURLLoader<T>(url: string) {
    // 返回
    const result = ref<T | null>(null)
    // 请求状态
    const loading = ref(true)
    // 是否请求完毕
    const loaded = ref(false)
    // 请求错误信息
    const error = ref(null)

    axios.get(url).then(res => {
        loaded.value = true
        loading.value = false
        result.value = {...res.data}
    }).catch(err => {
        error.value = err
        loading.value = false
    })
    return {
        result,
        loading,
        loaded,
        error
    }
}

export default useURLLoader