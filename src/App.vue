<template>
  <h1>监听鼠标点击坐标</h1>
  <div>
    <span>x:{{x}}</span>  | <span>y:{{y}}</span>
  </div>
  <div class="loading" v-if="loading">loading!...</div>
  <img class="dogImg" v-if="loaded" :src="result[0].url" >
</template>

<script lang="ts">
import { defineComponent, watch} from 'vue';
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
  setup() {
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
      result
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
</style>
