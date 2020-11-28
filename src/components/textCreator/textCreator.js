// import sanitizeHtml from 'sanitize-html';
import './textCreator.css'

const TextCreator = props => {
  return (
    <div>
      <strong>Выберите цвет текста</strong>
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