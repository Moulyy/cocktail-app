import { flushPromises, mount } from '@vue/test-utils'
import CocktailList from '@/components/CocktailList.vue'
import CocktailCard from '@/components/CocktailCard.vue';

describe('CocktailList.vue', () => {
  it('fetch cocktail API and give results to CocktailCard child', async () => {
    /** Déclaration de la réponse factice de l'API */
    const mockResponse = {
      drinks: [
        { idDrink: '1', strDrink: 'Margarita' },
        { idDrink: '2', strDrink: 'Cosmopolitan' },
        { idDrink: '3', strDrink: 'Mojito' },
        { idDrink: '4', strDrink: 'Gin and Tonic' },
        { idDrink: '5', strDrink: 'Bloody Mary' },
        { idDrink: '6', strDrink: 'Old Fashioned' },
        { idDrink: '7', strDrink: 'Martini' },
        { idDrink: '8', strDrink: 'Screwdriver' },
        { idDrink: '9', strDrink: 'Daiquiri' },
        { idDrink: '10', strDrink: 'Whiskey Sour' }
      ]
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    );
    /** On monte le composant CocktailList */
    const wrapper = mount(CocktailList);
    await wrapper.vm.$nextTick();
    await flushPromises();
    /** On vérifie qu'après que le composant CocktailList soit rendu, il affiche bien trois CocktailCard */
    const items = wrapper.findAllComponents(CocktailCard);
    expect(items.length).toStrictEqual(3);

    /** On vérifie que les cocktails passés en props au composant enfant CocktailCard soit bien les trois premiers de la liste de 10 récupérés par l'API */
    items.forEach((item, index) => {
      expect(item.props('cocktail')).toStrictEqual(mockResponse.drinks[index]);
    });

    expect(global.fetch).toHaveBeenCalledWith(`https://www.thecocktaildb.com/api/json/v2/${process.env.VUE_APP_API_KEY}/randomselection.php`);
  });

  it(`error message if API failed`, () => {
    const wrapper = mount(CocktailList , {
      data() {
        return {
          displayError: true,
          error: `Une erreur s'est produite. Veuillez réactualiser la page`
        }
      }
    });
    // Vérifie que l'élément <div> est affiché
    expect(wrapper.find('#error').exists()).toBe(true);

    // Vérifie que le message d'erreur est affiché
    expect(wrapper.find('#error').text()).toBe(`Une erreur s'est produite. Veuillez réactualiser la page`);
  });
})