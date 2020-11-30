import Enzyme, { shallow } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import BgColor from "./bgColor"

let wrapper;

beforeEach(() => {
  wrapper = shallow(<BgColor />)
})

Enzyme.configure({
  adapter: new Adapter()
})

describe('<BgColor />', () => {
  it('Should render 1 color selector input', () => {
    wrapper.setProps({gradient: false})
    expect(wrapper.find("[type='color']")).toHaveLength(1)
  })

  it('Should render 2 color selector input', () => {
    wrapper.setProps({gradient: true})
    expect(wrapper.find("[type='color']")).toHaveLength(2)
  })
})