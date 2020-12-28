import { reactive, toRefs } from 'vue';
import axios from 'axios';
interface ResData {
    message: string;
    status: string;
}
interface DataProps {
    result: ResData;
    loaded: boolean;
    loading: boolean;
    error: any;
}
function useURLLoader(url: string) {
    const data: DataProps = reactive({
        result: {
            message: '',
            status: ''
        },
        loading: true,
        loaded: false,
        error: null
    })

    const RefData = toRefs(data)

    axios.get(url).then(res => {
        data.loaded = true
        data.loading = false
        data.result = {...res.data}
    }).catch(err => {
        data.error = err
        data.loading = false
    })
    return {
        ...RefData
    }
}

export default useURLLoader