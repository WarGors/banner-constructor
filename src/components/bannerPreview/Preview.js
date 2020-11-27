import './Preview.css'

const Prewiew = props => {
  
  const backGround = props.gradient 
    ? { background: `linear-gradient(${parseFloat(props.gradientAngle) || 0}deg, ${props.color}, ${props.colorGradient})` }
    : { backgroundColor: props.color }
  return (
    <div className='content'>
      <div ref={props.banner} className='banner' style={backGround} id='banner'>
        {props.img ? <img style={{marginTop: '40px'}} width='350px' src={props.img} alt=''/> : null}
        <div className='text-container' style={{color: props.textColor}}>{props.text}</div>
      </div>
    </div>
  )
}

export default Prewiew