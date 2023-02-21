import { shallowMount } from '@vue/test-utils'
import ButtonComponent from '@/components/ButtonComponent.vue'

let wrapper;
const functionToBeCall = jest.fn();
beforeEach(() => {
  wrapper = shallowMount(ButtonComponent, {
    propsData: {
      onClick: functionToBeCall
    },
    slots: {
      default: 'Nouvelle tournée'
    }
  });
});

afterEach(() => {
  wrapper.unmount();
});
describe('ButtonComponent.vue', () => {
  it('execute function passed as props when button is clicked', async () => {
    expect(wrapper.props().onClick).toBeDefined();
    wrapper.find('#button').trigger('click');
    expect(wrapper.props().onClick).toHaveBeenCalled();
  })

  it('button contain slot', async () => {
    expect(wrapper.html()).toContain('Nouvelle tournée')
  })
})