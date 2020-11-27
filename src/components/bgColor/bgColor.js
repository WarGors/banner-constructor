import './bgColor.css'

const BgColor = props => {
  return (
    <div>
      <input 
        type="checkbox" 
        name="browser" 
        checked={props.gradient} 
        onChange={() => props.setState(prevState => ({...prevState, gradient: !prevState.gradient}))} 
      /> Градиентная заливка<br />
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
      <div>Угол градиента: <input 
        style={{width: '30px'}}  
        type='text' 
        value={props.gradientAngle}
        disabled={!props.gradient}
        onChange={e => props.setState(prevState => ({...prevState, gradientAngle: e.target.value}))} 
      /> deg</div>
    </div>
  )
}

export default BgColor