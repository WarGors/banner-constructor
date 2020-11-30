import './Preview.css'

const Prewiew = props => {

  const bannerStyle = {
    width: '400px',
    height: '500px',
    textAlign: 'center',
    paddingTop: '1px',
    display: 'inline-block',
    textDecoration: 'none'
  }

  const textContainerStyle = {
    margin: '30px 40px',
    fontSize: '2.4em',
    fontWeight: 'bold',
    fontFamily: 'Tahoma, Geneva, Verdana, sans-serif',
    height: '140px',
    overflow: 'hidden',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    color: props.textColor,
  }

  return (
    <div className='content'>
      <div className='wrapper'> 
        <a href={props.link} ref={props.banner} style={{...bannerStyle, ...props.background}}>
          {props.img ? <img style={{marginTop: '40px', width: '350px'}} src={props.img} alt=''/> : null}
          <div style={textContainerStyle}>{props.text}</div>
        </a>
      </div>
    </div>
  )
}

export default Prewiew