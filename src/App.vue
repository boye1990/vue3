<template>
  <p v-show="error">异步请求的错误{{error}}</p>
  <Suspense>
    <template #default>
      <dog-show></dog-show>
    </template>
    <template #fallback>
      <h1>loading!...</h1>
    </template>
  </Suspense>
  <h1>监听鼠标点击坐标</h1>
  <div>
    <span>x:{{x}}</span>  | <span>y:{{y}}</span>
  </div>
  <div class="loading" v-if="loading">loading!...</div>
  <img class="dogImg" v-if="loaded" :src="result[0].url" >
  <Modal :isShowModal='isShowModal' @close_modale='closeModal'>
    <div>你好</div>
  </Modal>
  <div class="openModal" @click='closeModal'>openModal</div>
</template>

<script lang="ts">
import Modal from './components/modal.vue';
import DogShow from './components/dogShow.vue';
import { defineComponent, watch, ref, onErrorCaptured} from 'vue';
import useMousePostion from './hooks/useMousePostion'
import useURLLoader from './hooks/useURLLoader'
interface DogReslutData {
  message: string;
  status: string;
}
interface CatReslutData {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
}
export default defineComponent({
  name: 'App',
  components: {
    Modal,
    DogShow
  },
  setup() {
    const error = ref(null)
    onErrorCaptured((e: any) => {
      error.value = e
      // 表示错误是否向上传播
      return true
    })
    const isShowModal = ref(false)

    const closeModal = ref(() => {
      isShowModal.value = !isShowModal.value
    })

    const { x, y } = useMousePostion()
    // const { result, loading, loaded } = useURLLoader<DogReslutData>('https://dog.ceo/api/breeds/image/random')
    const { result, loading, loaded } = useURLLoader<CatReslutData[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result, () => {
      if(result.value){
        console.log('url', result.value[0].url)
      }
    })
    return {
      x,
      y,
      loaded,
      loading,
      result,
      isShowModal,
      closeModal,
      error
    }
  },

});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dogImg{
  width: 400px;
  height: 400px;
}
.count {
  font-size: 30px;
  font-weight: 700
}
.loading {
  font-size: 30px;
  font-weight: 700;
  text-align: center
}
.openModal {
  width: 120px;
  height: 30px;
  border-radius: 15px;
  margin: 50px auto;
  background-color: cornflowerblue;
  line-height: 30px;
  font-weight: 700;
  cursor: pointer;
}
</style>
