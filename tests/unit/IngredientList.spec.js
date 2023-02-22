import { mount } from '@vue/test-utils'
import IngredientList from '@/components/IngredientList.vue'

describe('IngredientList.vue', () => {
  it('renders a list of ingredients', () => {
    const ingredients = ['Vodka', 'Lemon', 'Cranberry']
    const wrapper = mount(IngredientList, {
      propsData: {
        ingredients
      }
    })

    const items = wrapper.findAll('li')

    expect(items).toHaveLength(ingredients.length)
    ingredients.forEach((ingredient, index) => {
      expect(items.at(index).text()).toContain(ingredient)
    })
  })

  it('renders a message when there are no ingredients', () => {
    const wrapper = mount(IngredientList, {
      propsData: {
        ingredients: []
      }
    })

    const message = wrapper.find('p')

    expect(message.text()).toBe('Aucun ingrédient trouvé.')
  })

  it('updates the list of ingredients when the prop changes', async () => {
    const ingredients = ['Flour', 'Sugar']
    const wrapper = mount(IngredientList, {
      propsData: {
        ingredients
      }
    })

    const newIngredients = ['Eggs', 'Milk']
    await wrapper.setProps({
      ingredients: newIngredients
    })

    const items = wrapper.findAll('li')

    expect(items).toHaveLength(newIngredients.length)
    newIngredients.forEach((ingredient, index) => {
      expect(items.at(index).text()).toContain(ingredient)
    })
  })
})
