<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="count">{{ count }}</div>
  <div class="count">{{ double }}</div>
  <div class="btn" @click="increase"> ++ </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    // ref 创建的是响应式对象
    
    const count = ref(0)
    // computed 是计算熟悉，他的参数是一个函数
    const double = computed(() => {
      return count.value * 2
    })
    // 普通函数
    const increase = () => {
      count.value++
    }
    return {
      count,
      double,
      increase
    }
  }
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
  text-align: center
}
</style>
