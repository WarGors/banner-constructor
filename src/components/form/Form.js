import { useRef, useState } from 'react'
import BgColor from '../bgColor/bgColor'
import Drawer from '../drawer/drawer'
import Header from '../header/header'
import ImagesList from '../imagesList/imagesList'
import TextCreator from '../textCreator/textCreator'
import './Form.css'

const Form = props => {
  const banner = useRef(null)

  const initialState = {
    color: '#5AABD3',
    colorGradient: '#00FF9D',
    textColor: '#000000',
    text: '',
    img: null,
    gradientAngle: 0,
    gradient: false,
    isLoaded: false
  }

  const [state, setState] = useState(initialState)

  const showDrawerHandler = item => {
    navigator.clipboard.writeText(item)
    if (state.isLoaded) return
    setState(prevState => ({...prevState, isLoaded: true}))
    setTimeout(() => setState(prevState => ({...prevState, isLoaded: false})), 1500)
  }

  return (
    <>
      <aside>
        <form name='constructor' onSubmit={e => e.preventDefault()}>
          <BgColor
            color={state.color} 
            setState={setState}
            gradient={state.gradient}
            colorGradient={state.colorGradient}
            gradientAngle={state.gradientAngle}
          />
          <hr />
          <TextCreator 
            text={state.text} 
            setState={setState}
            textColor={state.textColor}
          />
          <hr />
          <ImagesList setState={setState}/> 
        </form>
      </aside>
      <main>
        <Header 
          showDrawerHandler={showDrawerHandler}
          state={state}
          banner={banner}
        />
        <Drawer isLoaded={state.isLoaded} />
        {props.children({...state, banner})}
      </main>
    </>
  )
}

export default Form