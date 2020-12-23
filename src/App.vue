<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="count">{{ count }}</div>
  <div class="count">{{ double }}</div>
  <ul>
    <li v-for="number in numbers" :key="number"> {{number}}</li>
  </ul>
  <div>{{person.name}}</div>
  <div class="btn" @click="increase"> ++ </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue';

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: {name?: string};
}

export default defineComponent({
  name: 'App',
  setup() {
    // // ref 创建的是响应式对象
    // const count = ref(0)
    // // computed 是计算熟悉，他的参数是一个函数
    // const double = computed(() => {
    //   return count.value * 2
    // })
    // // 普通函数
    // const increase = () => {
    //   count.value++
    // }
    // reactive 生成响应式对象
    const data: DataProps = reactive({
      count: 0,
      increase: () => { 
        data.count++
        data.numbers[0] = data.count
        data.person.name = `张三${data.count}`
       },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2, 3],
      person: {}
    })
    // 如果直接展开data，他的每一项将失去响应式对象属性。因此要通过toRefs 转化为 响应式对象
    const refData = toRefs(data)
    return {
      ...refData
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
  border-radius: 6px;
  text-align: center
}
</style>
