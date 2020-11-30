import './textCreator.css'

const TextCreator = props => {
  return (
    <div>
      <strong>Выберите цвет текста</strong>
      <input 
        className='text-color'
        type='color' 
        value={props.textColor} 
        onChange={props.textColorChangeHandler} 
      /><br />

      <textarea
        placeholder={'Введите текст...'}   
        type='text' 
        value={props.text} 
        onChange={props.textChangeHandler} 
      />
    </div>
    
  )
}

export default TextCreator