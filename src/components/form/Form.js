import html2canvas from 'html2canvas'
import { useRef, useState } from 'react'
import Canvas2Image from '../../canvas2image'
import BgColor from '../bgColor/bgColor'
import ImagesList from '../imagesList'
import TextCreator from '../textCreator/textCreator'
import './Form.css'

const Form = props => {
  const banner = useRef(null)

  const initialState = {
    color: '#ff0000',
    colorGradient: '#00FF9D',
    textColor: '#000000',
    text: '',
    img: null,
    gradientAngle: 0,
    gradient: false
  }

  const [state, setState] = useState(initialState)

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
          Выберите картину:
          <ImagesList setState={setState}/>
          <hr />
          <button 
            onClick={() => navigator.clipboard.writeText((banner.current.outerHTML))}
          >
            Скопировать баннер
          </button>
          <button 
            onClick={() => navigator.clipboard.writeText((JSON.stringify(state)))}
          >
            Скопировать конфигурацию баннера
          </button>
          <button 
            onClick={() => {
              html2canvas(banner.current)
                .then(canvas => Canvas2Image.saveAsPNG(canvas))
            }}
          >
            Сохранить как картинку
          </button>
        </form>
      </aside>
      <main>
        {props.children({...state, banner})}
      </main>
    </>
  )
}

export default Form




