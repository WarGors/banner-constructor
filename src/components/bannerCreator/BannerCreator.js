import { useRef, useState } from 'react'
import BgColor from '../bgColor/bgColor'
import Drawer from '../drawer/drawer'
import Header from '../header/header'
import ImagesList from '../imagesList/imagesList'
import TextCreator from '../textCreator/textCreator'
import domtoimage from 'dom-to-image'
import Prewiew from '../bannerPreview/Preview'
import './BannerCreator.css'

const initialState = {
  color: '#5AABD3',
  colorGradient: '#00FF9D',
  textColor: '#000000',
  text: '',
  img: null,
  gradientAngle: 0,
  link: '',
  gradient: false,
  isCopyed: false
}

const BannerCreator = props => {
  const banner = useRef(null)
  const inputLink = useRef(null)

  const [state, setState] = useState(initialState)

  const setStateHandler = (key, value) => {
    return setState(prevState => (
      { ...prevState, [key]: value !== 'toggle' ? value : !prevState[key] }
    ))
  }

  const copyItemHandler = item => {
    navigator.clipboard.writeText(item)
    if (state.isCopyed) return
    setStateHandler('isCopyed', true)
    setTimeout(() => setStateHandler('isCopyed', false), 1500)
  }

  const background = state.gradient 
    ? { background: `linear-gradient(${parseFloat(state.gradientAngle) || 0}deg, ${state.color}, ${state.colorGradient})` }
    : {backgroundColor: state.color}

  let config = {
    textColor: state.textColor,
    image: state.img,
    text: state.text,
    link: state.link,
    ...background
  }

  return (
    <>
      <aside>
        <form name='constructor' onSubmit={e => e.preventDefault()}>
          <BgColor
            color={state.color} 
            gradient={state.gradient}
            colorGradient={state.colorGradient}
            gradientAngle={state.gradientAngle}
            colorChangeHandler={e => setStateHandler('color', e.target.value)}
            gradientChangeHandler={e => setStateHandler('colorGradient', e.target.value)}
            toggleGradient={() => setStateHandler('gradient', 'toggle')}
            angleChangeHandler={e => setStateHandler('gradientAngle', e.target.value)}
          />
          <hr />
          <TextCreator 
            text={state.text} 
            textColor={state.textColor}
            textColorChangeHandler={e => setStateHandler('textColor', e.target.value)}
            textChangeHandler={e => setStateHandler('text', e.target.value)}
          />
          <hr />
          <ImagesList setImage={setStateHandler}/> 
        </form>
      </aside>
      <main>
        <Header
          inputLink={inputLink}
          copyHTML={() => copyItemHandler((banner.current.outerHTML))}
          copyConfig={() => copyItemHandler(JSON.stringify(config))}
          setLink={() => {
            setStateHandler('link', inputLink.current.value)
            inputLink.current.value = ''
          }}
          saveImage={() => domtoimage.toJpeg(banner.current, { quality: 1 })
            .then(function (dataUrl) {
              const link = document.createElement('a');
              link.download = 'banner.png';
              link.href = dataUrl;
              link.click();
          })}
        />

        <Drawer isCopyed={state.isCopyed} />

        <Prewiew 
          textColor={state.textColor}
          background={background}
          banner={banner}
          img={state.img}
          text={state.text}
          link={state.link}
        />
      </main>
    </>
  )
}

export default BannerCreator