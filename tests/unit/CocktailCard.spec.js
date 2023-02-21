import { shallowMount, mount } from "@vue/test-utils";
import CocktailCard from "@/components/CocktailCard.vue";

describe("CocktailCard.vue", () => {
  it("The component does not render anything if the cocktail props is not specified", () => {
    const wrapper = shallowMount(CocktailCard);
    wrapper.setProps({ cocktail: null });
    expect(wrapper.find("#cocktail-card").exists()).toBe(false);
  });

  it("Call getIngredients function when the component is mounted", async () => {
    const getIngredientsMock = jest.spyOn(
      CocktailCard.methods,
      "getIngredients"
    );
    shallowMount(CocktailCard, {
      propsData: {
        cocktail: {
          idDrink: "1",
          strDrink: "Mojito",
        },
      },
    });
    expect(getIngredientsMock).toHaveBeenCalled();
    getIngredientsMock.mockRestore();
  });

  it("getIngredients function should insert ingredients of cocktail in ingredients array of the component only if the ingredients are given", async () => {
    const cocktail = {
      strIngredient1: "Vodka",
      strIngredient2: "Cranberry juice",
      strIngredient3: "",
      strIngredient4: "",
    };
    const wrapper = mount(CocktailCard, {
      propsData: {
        cocktail: cocktail,
      },
    });

    const ingredients = wrapper.vm.getIngredients();

    expect(ingredients).toHaveLength(2);
    expect(ingredients[0]).toBe("Vodka");
    expect(ingredients[1]).toBe("Cranberry juice");
    const ingredientsList = wrapper.find('#ingredientsList');
    expect(ingredientsList.text()).toContain('Vodka');
    expect(ingredientsList.text()).toContain('Cranberry juice');
    
  });

  it("update ingredients when props cocktail is updated", async () => {
    const getIngredientsMock = jest.spyOn(
      CocktailCard.methods,
      "getIngredients"
    );
    const wrapper = shallowMount(CocktailCard, {
      propsData: {
        cocktail: {
          idDrink: '1',
          strDrink: 'Mojito',
        }
      },
      methods: {
        getIngredients: getIngredientsMock
      }
    })
    expect(getIngredientsMock).toHaveBeenCalled()
  
    // Change the cocktail prop
    wrapper.setProps({
      cocktail: {
        idDrink: '2',
        strDrink: 'Cosmopolitan',
      }
    })
    await wrapper.vm.$nextTick()
    expect(getIngredientsMock).toHaveBeenCalledTimes(2)
  });

  it('should set isHover to true when the card is hovered', async () => {
    const wrapper = shallowMount(CocktailCard, {
      propsData: {
        cocktail: {
          idDrink: '1',
          strDrink: 'Mojito',
        }
      }
    })
  
    // Vérifie que isHover est à false au début
    expect(wrapper.vm.isHover).toBe(false)
  
    // Simule l'événement de survol
    const card = wrapper.find('#cocktail-card')
    await card.trigger('mouseover')
  
    // Vérifie que isHover a été mis à true
    expect(wrapper.vm.isHover).toBe(true)
  })
});
