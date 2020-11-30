import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Drawer from "./drawer";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Drawer />)
})

configure({
  adapter: new Adapter()
})

describe('<Drawer />', () => {
  it(`Should add class 'closed'`, () => {
    wrapper.setProps({isCopyed: false})
    expect(wrapper.find('.drawer').hasClass('closed')).toEqual(true)
  })

  it(`Should remove class 'closed'`, () => {
    wrapper.setProps({isCopyed: true})
    expect(wrapper.find('.drawer').hasClass('closed')).toEqual(false)
  })  

})