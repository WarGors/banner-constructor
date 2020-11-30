import './header.css'

const Header = props => {
  
  return (
    <header>
      <div className='input-confirm'>
        <input
          ref={props.inputLink} 
          type='text' 
          placeholder='Ссылка для баннера...'
        />
        <button onClick={props.setLink}>
          Применить
        </button>
      </div>
      <button onClick={props.copyHTML}>
        Скопировать баннер
      </button>
      <button onClick={props.copyConfig}>
        Скопировать конфигурацию
      </button>
      <button onClick={props.saveImage}>
        Сохранить картинку
      </button >
    </header>
  )
}

export default Header