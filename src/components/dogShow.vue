<template>
  <img :src="result && result.message" alt="">
</template>

<script lang='ts'>
import axios from 'axios'
import {defineComponent} from 'vue'
export default defineComponent({
    async setup() {
        const resultData = await axios.get('https://dog.ceo/api/breeds/image/random')
        return {
            result: resultData.data
        }
    }
})
</script>

<style>

</style>