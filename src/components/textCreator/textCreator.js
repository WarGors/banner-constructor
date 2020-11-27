import './textCreator.css'

const TextCreator = props => {
  return (
    <div>
      Выберите цвет текста: 
      <input 
        className='text-color'
        type='color' 
        value={props.textColor} 
        onChange={e => props.setState(prevState => ({...prevState, textColor: e.target.value}))} 
      /><br />
      
      <textarea
        placeholder={'Введите текст...'}  
        id='text' 
        type='text' 
        value={props.text} 
        onChange={e => props.setState(prevState => ({...prevState, text: e.target.value}))} 
      />
    </div>
    
  )
}

export default TextCreator