import { reactive, toRefs } from 'vue';
import axios from 'axios';

function useURLLoader<T>(url: string) {
    
    interface ReactiveData {
        result: T | null;
        loading: boolean;
        loaded: boolean;
        error: any;
    }

    const data: ReactiveData = reactive({
        result: null,
        loading: true,
        loaded: false,
        error: null
    })

    const refData = toRefs(data)

    axios.get(url).then(res => {
        data.loaded = true
        data.loading = false
        data.result = {...res.data}
    }).catch(err => {
        data.error = err
        data.loading = false
    })
    return {
        ...refData
    }
}

export default useURLLoader