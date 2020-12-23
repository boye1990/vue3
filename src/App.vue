<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="count">{{count}}</div>
  <div class="btn" @click="increase">++</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const count = ref(0)
    const increase = () => {
      count.value++
    }
    return {
      count,
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
