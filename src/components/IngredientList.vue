<script>
export default {
  props: {
    ingredients: {}
  },
}
</script>

<template>
  <ul class="flex flex-col flex-wrap max-h-24 max-w-xs text-xs overflow-hidden font-poppins">
    <li v-for="(ingredient, index) in ingredients" :key="index">
      - {{ ingredient }}
    </li>
  </ul>
</template>

<style scoped>
li {
  word-break: break-word
}
</style>