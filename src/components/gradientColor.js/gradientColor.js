const GradientColor = props => {
  return (
    <div>
      Выберите цвета градиента:
      <input  
        type='color' 
        value={props.color1} 
        onChange={e => props.setState(prevState => ({...prevState, color1: e.target.value}))} 
      />
      <input 
        type='color' 
        value={props.color2} 
        onChange={e => props.setState(prevState => ({...prevState, color2: e.target.value}))} 
      />
    </div>
  )
}