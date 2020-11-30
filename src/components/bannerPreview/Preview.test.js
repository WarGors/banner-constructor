import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Prewiew from "./Preview";

let wrapper;

const props = {
  textColor: 'text-color',
  background: {background: 'background'},
  img: 'testing-src',
  text: 'testing',
  link: 'test.link'
}

beforeEach(() => {
  wrapper = shallow(<Prewiew />)
  wrapper.setProps(props)
})

configure({
  adapter: new Adapter()
})

describe('<Prewiew />', () => {
  it('Should add text from props to banner', () => {
    expect(wrapper.find('#text').text()).toEqual(props.text)
  })

  it('Should change text color of banner', () => {
    const style = wrapper.find('#text').prop('style')
    expect(style.color).toEqual(props.textColor)
  })
  
  it('Should change background color of banner', () => {
    const style = wrapper.find('a').prop('style')
    expect(style.background).toEqual(props.background.background)
  })
  
  it('Should change link of banner', () => {
    expect(wrapper.find('a').prop('href')).toEqual(props.link)
  })

  it('Should add image and change src of image', () => {
    expect(wrapper.find('img').prop('src')).toEqual(props.img)
  })

})