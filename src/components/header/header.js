import Canvas2Image from '../../canvas2image'
import html2canvas from 'html2canvas'
import './header.css'

const Header = props => {
  return (
    <header>
      <button 
        onClick={() => props.showDrawerHandler((props.banner.current.outerHTML))}
      >
        Скопировать баннер
      </button>
      <button 
        onClick={() => props.showDrawerHandler(JSON.stringify(props.state))}
      >
        Скопировать конфигурацию
      </button>
      <button 
        onClick={() => html2canvas(props.banner.current)
          .then(canvas => Canvas2Image.saveAsPNG(canvas, undefined, undefined, 'banner'))
        }
      >
        Сохранить картинку
      </button >
    </header>
  )
}

export default Header