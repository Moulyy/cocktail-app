<template>
  <div class="bg-gradient-bg h-screen w-screen">
    <div class="flex items-center justify-center h-screen w-full">
      <div v-if="!isLoaded">
        <LoaderComponent />
      </div>
      <div v-else>
        <CocktailList />
      </div>
    </div>
  </div>
</template>

<script>
import CocktailList from './components/CocktailList.vue'
import LoaderComponent from './components/LoaderComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      isLoaded: false
    }
  },
  components: {
    CocktailList,
    LoaderComponent,
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 2500);
  }
}
</script>

<style></style>
