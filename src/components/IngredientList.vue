<script>
export default {
  props: {
    ingredients: {
      type: Array,
      required: true,
      default: () => []
  }
  },
}
</script>

<template>
  <ul v-if="ingredients.length > 0" class="flex flex-col flex-wrap max-w-xs max-h-24 md:max-h-full overflow-hidden font-poppins">
    <li v-for="(ingredient, index) in ingredients" :key="index">
      - {{ ingredient }}
    </li>
  </ul>
  <p v-else class="font-poppins">Aucun ingrédient trouvé.</p>
</template>

<style scoped>
li {
  word-break: break-word
}
</style>