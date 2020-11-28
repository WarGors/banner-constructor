import './drawer.css'

const Drawer = props => {
  const drawer = `drawer ${props.isLoaded ? null : 'closed'}`
  return (
    <div className={drawer}>
      Скопировано в буфер обмена
    </div>
  )
}

export default Drawer