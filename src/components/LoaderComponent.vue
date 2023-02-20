<template>
  <div class="flex flex-col items-center">
    <Vue3Lottie :animationData="LemonadeJSON" :height="500" :width="400" />
    <div class="text-3xl">
      Préparation des cocktails...
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import LemonadeJSON from '../assets/lemonade.json';
export default {
  components: {
    Vue3Lottie
  },
  data() {
    return {
      LemonadeJSON,
    }
  },
}
</script>