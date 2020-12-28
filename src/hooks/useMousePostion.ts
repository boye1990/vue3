import {reactive, toRefs, onMounted, onUnmounted} from 'vue'

interface DataProps {
    x: number;
    y: number;
    updateMouse: (e: MouseEvent) => void;
  }
function useMousePostion() {
    const data: DataProps = reactive({
        x: 0,
        y: 0,
        updateMouse: (e: MouseEvent) => {
            data.x = e.pageX
            data.y = e.pageY
        }
    })
    const refData = toRefs(data)


    onMounted(() => {
        document.addEventListener('click', data.updateMouse)
    })
    onUnmounted(() => {
        document.removeEventListener('click', data.updateMouse)
    })
    return {
        ...refData
    }
}

export default useMousePostion