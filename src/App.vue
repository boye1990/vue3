<template>
  <h1>监听鼠标点击坐标</h1>
  <div>
    <span>x:{{x}}</span>  | <span>y:{{y}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import useMousePostion from './hooks/useMousePostion'

export default defineComponent({
  name: 'App',
  setup() {
    const { x, y } = useMousePostion()
    return {
      x,
      y
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
img{
  width: 400px;
  height: 400px;
}
.count {
  font-size: 30px;
  font-weight: 700
}
.btn {
  width: 100px;
  height: 30px;
  background-color: yellowgreen;
  margin: 0 auto;
  line-height: 30px;
  border-radius: 6px;
  text-align: center
}
</style>
