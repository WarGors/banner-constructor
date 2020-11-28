// import sanitizeHtml from 'sanitize-html';
import './bgColor.css'

const BgColor = props => {
  return (
    <div className='bgc-container'>
      <strong className='col-header'>Настройте фон</strong>
      <input 
        type="checkbox" 
        checked={props.gradient} 
        onChange={() => props.setState(prevState => ({...prevState, gradient: !prevState.gradient}))} 
      />Включить градиентную заливку<br />
      <div>Угол градиента: <input 
        style={{width: '30px'}}  
        type='text' 
        value={props.gradientAngle}
        disabled={!props.gradient}
        onChange={e => {
          props.setState(prevState => ({...prevState, gradientAngle: e.target.value}))
        }} 
      /> deg</div>
      {props.gradient ? 'Выберите цвета градиента: ' : 'Выберите цвет фона: '}<br />
      <input 
        className='fill'
        type='color' 
        value={props.color} 
        onChange={e => props.setState(prevState => ({...prevState, color: e.target.value}))} 
      />
      { 
        props.gradient 
          ? <input 
            className='fill'
            type='color' 
            value={props.colorGradient} 
            onChange={e => props.setState(prevState => ({...prevState, colorGradient: e.target.value}))} 
          />
          : null
      }
    </div>
  )
}

export default BgColor