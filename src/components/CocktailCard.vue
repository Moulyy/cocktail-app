<script>
import IngredientList from './IngredientList.vue';
export default {
  props: {
    cocktail: {}
  },
  components: {
    IngredientList
  },
  data() {
    return {
      /** Liste des ingrédients */
      ingredients: [],
      /** La carte est-elle en train d'être survolée ? */
      isHover: false
    }
  },
  methods: {
    /** Récupère tous les ingrédients reçu en props à travers le cocktail */
    getIngredients() {
      this.ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`];
        if (ingredient) {
          this.ingredients.push(ingredient);
        }
      }
      return this.ingredients;
    }
  },
  watch: {
    /** A chaque fois que le cocktail passé en paramètre change, on va réactualiser la liste des ingrédients */
    cocktail: function (newVal, oldVal) {
      if (newVal && oldVal && newVal.idDrink && oldVal.idDrink) {
        this.getIngredients();
      }
    }
  },
  /** Lorsque le composant est monté, on va construire la liste des ingrédients à partir du cocktail reçu en props */
  created() {
    if (this.cocktail) {
      this.getIngredients();
    }
  }
}
</script>

<template>
  <div v-if="cocktail" id="cocktail-card" @mouseover="isHover = true" @mouseout="isHover = false" class="card" :style="{ backgroundImage: 'url(' + cocktail.strDrinkThumb + ')' }">
    <div class="card-footer">
      <div class="font-nunito max-w-xs">
        <div v-show="isHover" id="ingredientsList" class="p-4">
          <div class="flex justify-center text-md mb-2">{{ cocktail.strDrink }}</div>
          <IngredientList :ingredients="ingredients"></IngredientList>
        </div>
        <div v-show="!isHover" class="footer-content p-4">{{ cocktail.strDrink }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 315px;
  height: 150px;
  border-radius: 12px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
}

.card-footer {
  position: absolute;
  bottom: 0px;
  height: 60px;
  width: 100%;
  background: rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(6px);
  color: white;
}

.footer-content {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.card:hover .card-footer {
  height: 100%;
  background: rgba(0, 0, 0, 0.43);
}
</style>