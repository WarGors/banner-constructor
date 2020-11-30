import './bgColor.css'

const BgColor = props => {
  return (
    <div className='bgc-container'>
      <strong className='col-header'>Настройте фон</strong>
      <input 
        type="checkbox" 
        checked={props.gradient} 
        onChange={props.toggleGradient} 
      />Включить градиентную заливку<br />
      <div>Угол градиента: <input 
        style={{width: '30px'}}  
        type='text' 
        value={props.gradientAngle}
        disabled={!props.gradient}
        onChange={props.angleChangeHandler} 
      /> deg</div>
      {props.gradient ? 'Выберите цвета градиента: ' : 'Выберите цвет фона: '}<br />
      <input 
        className='fill'
        type='color' 
        value={props.color} 
        onChange={props.colorChangeHandler} 
      />
      { 
        props.gradient 
          ? <input 
            className='fill'
            type='color' 
            value={props.colorGradient} 
            onChange={props.gradientChangeHandler} 
          />
          : null
      }
    </div>
  )
}

export default BgColor