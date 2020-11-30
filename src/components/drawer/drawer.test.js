import Enzyme, { shallow } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import Drawer from "./drawer"

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Drawer />)
})

Enzyme.configure({
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