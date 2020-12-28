<template>
  <h1>监听鼠标点击坐标</h1>
  <div>
    <span>x:{{x}}</span>  | <span>y:{{y}}</span>
  </div>
  <div class="loading" v-if="loading">loading!...</div>
  <img class="dogImg" v-if="loaded" :src="result.message" >
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import useMousePostion from './hooks/useMousePostion'
import useURLLoader from './hooks/useURLLoader'

export default defineComponent({
  name: 'App',
  setup() {
    const { x, y } = useMousePostion()
    const { result, loading, loaded } = useURLLoader('https://dog.ceo/api/breeds/image/random')
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
